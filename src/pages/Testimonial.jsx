import React from 'react';
import Slider from 'react-slick';
import Card from '../components/Card';  

const testimonials = [
  {
    title: "John Doe",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    testimonial: "This service is fantastic! Highly recommend it to anyone.",
  },
  {
    title: "Jane Smith",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    testimonial: "Amazing experience, very professional and friendly.",
  },
  {
    title: "Michael Johnson",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    testimonial: "A game-changer in the industry. Will definitely use again.",
  },
  {
    title: "Emily Davis",
    img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600",
    testimonial: "Outstanding service and support throughout the process.",
  },
  {
    title: "David Brown",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    testimonial: "Very pleased with the results, would highly recommend.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-20 flex justify-center relative">
      <div className="container px-4 mt-10 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-20">What Our Clients Say About Us</h2>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              img={item.img}
              testimonial={item.testimonial}
              alt={`${item.title}'s testimonial`}  
            />
          ))}
        </Slider>
      </div>
     
    </section>
  );
};

export default Testimonial;
