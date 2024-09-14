import React from 'react';
import Slider from 'react-slick';
import Card from '../components/Card';  

const testimonials = [
  {
    title: "John Doe",
    img: "https://via.placeholder.com/150",
    testimonial: "This service is fantastic! Highly recommend it to anyone.",
  },
  {
    title: "Jane Smith",
    img: "https://via.placeholder.com/150",
    testimonial: "Amazing experience, very professional and friendly.",
  },
  {
    title: "Michael Johnson",
    img: "https://via.placeholder.com/150",
    testimonial: "A game-changer in the industry. Will definitely use again.",
  },
  {
    title: "Michael Johnson",
    img: "https://via.placeholder.com/150",
    testimonial: "A game-changer in the industry. Will definitely use again.",
  },
  {
    title: "Michael Johnson",
    img: "https://via.placeholder.com/150",
    testimonial: "A game-changer in the industry. Will definitely use again.",
  },
  {
    title: "Michael Johnson",
    img: "https://via.placeholder.com/150",
    testimonial: "A game-changer in the industry. Will definitely use again.",
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
        <h2 className="text-3xl font-semibold text-center mb-20">What Our Clients Say About us</h2>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              img={item.img}
              testimonial={item.testimonial}
            />
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .testimonial-slider .slick-slide {
          transition: opacity 0.5s ease;
        }

        .testimonial-slider .slick-slide.slick-center {
          opacity: 1;
          transform: scale(1.05);
        }

        .testimonial-slider .slick-slide:not(.slick-center) {
          opacity: 0.5;
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
