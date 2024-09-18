import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import { useMutation } from '@tanstack/react-query';
import { FaUserCircle, FaUpload } from 'react-icons/fa';

const Upload = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! Please upload an image to get a response.', fromUser: false },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/api/users/predict-digit/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed");
    }
  };

  const mutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: (data) => {
      setMessages([...messages, { text: `Predicted digit: ${data.predicted_digit}`, fromUser: false }]);
    },
    onError: (error) => {
      setMessages([...messages, { text: `Error: ${error.message}`, fromUser: false }]);
    }
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      mutation.mutate(file);  
    }
  };

  return (
    <div className="min-h-screen bg-color-main flex">
      <div className="sidebar w-64 bg-gray-800 text-white p-4">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-4xl mb-4" />
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <div className="flex flex-col w-full">
            <button className="flex items-center text-white py-2 px-4 mb-2 rounded-lg hover:bg-gray-700">
              <FaUpload className="mr-2" /> Upload Image
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Chat with Support</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.fromUser ? 'justify-end' : 'justify-start'} mb-3`}
            >
              <div 
                className={`max-w-xs px-4 py-2 rounded-lg text-white ${msg.fromUser ? 'bg-blue-600' : 'bg-gray-600'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {selectedImage && (
            <div className="flex justify-center">
              <img src={selectedImage} alt="Uploaded" className="max-w-xs mt-4 rounded-lg" />
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200 bg-gray-100">
          <input 
            type="file" 
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
