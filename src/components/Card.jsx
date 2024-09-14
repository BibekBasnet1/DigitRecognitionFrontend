import React from 'react';

const Card = ({ title, img, testimonial }) => {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform-gpu hover:scale-105">
      <a href="#">
        <img className="p-8 rounded-t-xl w-full h-48 object-cover" src={img} alt="testimonial" />
      </a>
      <div className="px-6 pb-6">
        <a href="">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="text-gray-700 mt-4 text-lg">{testimonial}</p>
      </div>
    </div>
  );
};

export default Card;
