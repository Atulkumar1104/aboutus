import React from "react";

const LeftImageLayout = () => {
  const sections = [
    {
      title: "Our Specialties",
      content:
        "We strive to bring the best quality and innovation to our work. Our team continuously works on new ideas and technologies.",
    },
    {
      title: "Our Services",
      content:
        "We offer a variety of digital services, including web development, mobile app development, and digital marketing.",
    },
    {
      title: "Our Experience",
      content:
        "Over the past 10 years, we have successfully completed numerous projects. Client satisfaction is our greatest achievement.",
    },
    {
      title: "Our Team",
      content:
        "Our team comprises experienced professionals who are experts in their respective fields. We work together like a family.",
    },
    {
      title: "Client Testimonials",
      content:
        "Our clients are extremely happy with our work. Their positive feedback inspires us to perform even better.",
    },
    {
      title: "Future Plans",
      content:
        "We are expanding into new technologies and services. Our goal is to establish a global presence.",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left sticky section */}
      <div className="w-1/2 relative">
        <div className="sticky top-0 h-screen">
          <img
            src="https://i.pinimg.com/736x/30/ed/8e/30ed8e159141bf4815fb85c8b50b5caa.jpg"
            alt="Company Overview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right scrollable section */}
      <div className="w-1/2 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-12 text-white">Our Mission</h1>
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-300">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftImageLayout;
