import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


import banner1 from '../../assets/dami_4.jpg'
import banner2 from '../../assets/dami_2.jpg'
import banner3 from '../../assets/dami_3.jpg'
import banner4 from '../../assets/dami_1.jpg'
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Elevate Your Style with Riss",
    subtitle: "Discover timeless clothing and accessories crafted for every moment. ",
    buttonText: "Shop Now",
    image: banner1,
  },
  {
    id: 2,
    title: "Elegant Accessories for You",
    subtitle: "Discover timeless clothing and accessories crafted for every moment. ",
    buttonText: "Discover More",
    image: banner2,
  },
  {
    id: 3,
    title: "Luxury Meets Functionality",
    subtitle: "Transform your look with premium Qualities.",
    buttonText: "Shop Now",
    image: banner3,
  },
  {
    id: 4,
    title: "Luxury Meets Functionality",
    subtitle: "Discover timeless clothing and accessories crafted for every moment.",
    buttonText: "Explore Collection",
    image:banner4,
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

 

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#000] opacity-80"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
              <motion.h1
                className="text-3xl md:text-6xl font-thin mb-4 font-riss"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-sm font-sans  md:text-sm mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
  className="inline-block"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  <Link
    to="/shop" // Replace "/shop" with the desired route
    className="bg-transparent border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1a2d42] transition-all duration-300"
  >
    {slide.buttonText}
  </Link>
</motion.div>
            </div>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};

export default Carousel;
