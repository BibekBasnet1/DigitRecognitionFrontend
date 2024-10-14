import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { getFromLocalStorage } from '../utils/localstorage';

const Upload = () => {

  const [messages, setMessages] = useState([
    { text: 'Hello! Please upload an image to get a response.', fromUser: false },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

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
      setMessages([...messages, { text: `Predicted digit: ${data.predicted_digit}`, fromUser: true }]);
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

  useEffect(()=>{
      const token = getFromLocalStorage('access_token');
      if(!token){
        navigate('/login');
      }
  },[])

  return (
    <div className="min-h-screen bg-slate-700 flex">
      <div className="flex justify-center bg-color-main w-full flex-col">
        <div className="flex justify-center bg-color-main w-full h-4/5">
          <div className="flex-1 p-4 overflow-y-auto bg-color-main">
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
                <img src={selectedImage} alt="Uploaded" className="object-contain mt-4 min-w-3xl min-h-96 max-w-3xl max-h-96 rounded-lg" />
              </div>
            )}
          </div>
        </div>

        <div className="flex p-8  min-w-[80rem] max-w-full h-1/5">
          <div className="flex w-full rounded-xl items-end justify-center">
            <input
              type="file"
              className="block p-3 text-center justify-center  text-sm text-slate-500 mb-20 min-w-20
              file:mr-4 file:py-2 file:px-4 file:rounded-md
              file:border-0 file:text-sm file:font-semibold
              file:bg-pink-50 file:text-pink-700
              hover:file:bg-pink-100"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Upload;

