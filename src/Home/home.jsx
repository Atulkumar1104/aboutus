import React, { useState, useEffect } from "react";
import ScrollRevealStats from "../scrollReveal";
import Timeline from "../timeline";
import ValuesLayout from "../valuesLayout";
import LeftImageLayout from "../missionValues";
import CTASection from "../cta";
import FAQSection from "../faq";
import ContactSection from "../contactUs";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Array of placeholder images - replace with your actual image URLs
  const images = [
    "https://i.pinimg.com/736x/6b/de/fc/6bdefce6a98614b0a9d4c6b3973c526b.jpg",
    "https://i.pinimg.com/736x/42/f3/85/42f38560972c54fe4df506263a756dcc.jpg",
    "https://i.pinimg.com/736x/42/f3/85/42f38560972c54fe4df506263a756dcc.jpg",
    "https://i.pinimg.com/736x/64/62/a7/6462a7788f015c9cf337c136c77e26d7.jpg",
  ];

  useEffect(() => {
    // Image rotation logic
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Image Slideshow Background */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Illuminating The Path Of <br />
              Innovation And Excellence{" "}
            </h1>

            <p className="text-gray-200 mb-10 text-xl max-w-4xl mx-auto">
              Transforming businesses with digital innovation and data-driven
              applications
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Slideshow Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-blue-500 w-4"
                  : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div>
        <ScrollRevealStats />
      </div>
      <div className="bg-gradient-to-b from-black to-gray-900">
        <Timeline />
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <ValuesLayout />
      </div>
      <div className="bg-gradient-to-b from-black to-gray-900">
        <LeftImageLayout />
      </div>
      <div className="p-10 bg-gradient-to-b from-gray-900 to-black">
        <CTASection />
      </div>
      <div>
        <FAQSection />
      </div>
      <div><ContactSection/></div>
    </>
  );
};

export default Home;
