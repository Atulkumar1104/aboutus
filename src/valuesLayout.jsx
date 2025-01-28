import React from "react";

const ValuesLayout = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "Innovation is the process of transforming creative ideas into impactful solutions that address real-world challenges. It drives progress by introducing novel approaches, technologies, or methods to enhance efficiency, productivity, and quality of life.",
    },
    {
      title: "Integrity",
      description:
        "Integrity is the practice of being honest and adhering to strong moral and ethical principles, even when no one is watching. It fosters trust, accountability, and consistency in actions, forming the foundation for personal and professional relationships.",
    },
    {
      title: "Excellence",
      description:
        "Excellence is the commitment to delivering the highest quality in everything you do, consistently striving for improvement and surpassing expectations. It reflects dedication, passion, and a pursuit of perfection in achieving outstanding results.",
    },
    {
      title: "Teamwork",
      description:
        "Teamwork is the collaborative effort of individuals working together toward a common goal, leveraging diverse strengths and perspectives. It fosters trust, communication, and synergy, enabling greater success than could be achieved alone.",
    },
    {
      title: "Customer Focus",
      description:
        "At the heart of our business lies an unwavering commitment to customer satisfaction. We strive to understand your unique needs and deliver tailored solutions that exceed expectations, ensuring a seamless and rewarding experience every step of the way.",
    },
    {
      title: "Growth Mindset",
      description:
        "A growth mindset drives our journey, inspiring us to embrace challenges, learn from experiences, and continuously improve. We believe in unlocking potential through innovation, resilience, and a passion for progress.",
    },
  ];

  return (
    <div className="flex  min-h-screen">
      {/* Left scrollable section */}
      <div className="w-1/2 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Our Values</h1>
        <div className="space-y-12">
          {values.map((value, index) => (
            <div key={index} className="border-b pb-8 last:border-b-0">
              <h2 className="text-xl font-semibold text-gray-300 mb-4">
                {value.title}
              </h2>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right sticky section */}
      <div className="w-1/2 relative">
        <div className="sticky top-0 h-screen">
          <img
            src="https://i.pinimg.com/736x/9d/78/7c/9d787c62c01f13e5354014d3e4639c59.jpg"
            alt="Company Values"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ValuesLayout;
