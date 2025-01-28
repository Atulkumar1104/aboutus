import React, { useState, useEffect } from "react";

const ScrollRevealStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      if (element) {
        const position = element.getBoundingClientRect();
        const isVisible =
          position.top < window.innerHeight && position.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: "05",
      label: "Global Excellence Centers",
      color: "bg-purple-200",
    },
    {
      number: "50+",
      label: "Awards & Certifications",
      color: "bg-green-200",
    },
    {
      number: "90%",
      label: "Returning Client Rate",
      color: "bg-blue-200",
    },
    {
      number: "94.7%",
      label: "Employee Happiness Index",
      color: "bg-yellow-200",
    },
  ];

  return (
    <div id="stats-section" className="w-full bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "text-white" : "text-transparent bg-clip-text"
            }`}
          >
            We are a group of agile thinkers who grew from the ground base of
            just 5 enthusiastic problem solvers in 2015 to a team of 1600+ tech
            experts
          </h2>
          <p
            className={`text-xl transition-all duration-1000 ${
              isVisible ? "text-gray-300" : "text-transparent"
            }`}
          >
            Every solution offered to our clients is backed by strong factors
            that enable seamless business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                stat.color
              } rounded-2xl p-6 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollRevealStats;
