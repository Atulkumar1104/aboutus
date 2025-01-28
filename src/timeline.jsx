import React, { useState } from "react";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(2018);

  const timelineContent = {
    2015: {
      title: "2015",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2015, with the rest of the year still left to achieve more.",
      image:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/about-story-2019.webp",
      alt: "2015 Company Achievement",
    },
    2016: {
      title: "2016",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2016, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/5e/eb/c1/5eebc1290e7d9c7c627ad9473a70c37f.jpg",
      alt: "2016 Company Growth",
    },
    2017: {
      title: "2017",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2017, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/09/dd/f6/09ddf6be7ba9bd7b742c1b1b021516f5.jpg",
      alt: "2017 Company Milestone",
    },
    2018: {
      title: "2018",
      description:
        "Clocking a 250% YOY growth, we moved into a new office to accommodate our enormous strength of 400+ employees, and expanded across the globe with 6 new branches.",
      image:
        "https://i.pinimg.com/736x/93/bd/d6/93bdd6f7a32379e7126f8fe6c43b13e8.jpg",
      alt: "2018 Business Success",
    },
    2019: {
      title: "2019",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2019, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/3f/d8/4e/3fd84e521d401140bac5cf034f8d1215.jpg",
      alt: "2019 Company Performance",
    },
    2020: {
      title: "2020",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2020, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/3f/d8/4e/3fd84e521d401140bac5cf034f8d1215.jpg",
      alt: "2020 Business Achievement",
    },
    2022: {
      title: "2022",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2022, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/3f/d8/4e/3fd84e521d401140bac5cf034f8d1215.jpg",
      alt: "2022 Company Growth",
    },
    2023: {
      title: "2023",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in 2023, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/3f/d8/4e/3fd84e521d401140bac5cf034f8d1215.jpg",
      alt: "2023 Business Success",
    },
    2024: {
      title: "2024",
      description:
        "Amid global economic downturn, our revenues remained on a positive growth trajectory landing us in the Top APAC high-growth companies in the first quarter of 2024, with the rest of the year still left to achieve more.",
      image:
        "https://i.pinimg.com/736x/ab/af/1c/abaf1cdf0bd26e5bdfe302d9201e5389.jpg    ",
      alt: "2024 Current Achievement",
    },
  };

  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023, 2024];

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-8">
      {/* Content Section */}
      <div className="mb-20 max-w-6xl mx-auto">
        {selectedYear && timelineContent[selectedYear] && (
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-wrap items-center gap-12 w-full">
              {/* Image Card - Now tilted */}
              <div className="relative w-96 ml-28 h-64 transform -rotate-6">
                <img
                  src={timelineContent[selectedYear].image}
                  alt={timelineContent[selectedYear].alt}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Large Year Display */}
              <h2 className="text-[#0052FF] text-[250px] -ml-28 z-10 font-bold">
                {timelineContent[selectedYear].title}
              </h2>
            </div>

            {/* Description - Now below the image and year */}
            <p className="text-white text-lg -mt-24 max-w-xl ml-[600px]">
              {timelineContent[selectedYear].description}
            </p>
          </div>
        )}
      </div>

      {/* Timeline - Keeping original style */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative flex justify-between items-start">
          <div className="absolute w-full h-0.5 bg-orange-500 top-[9px]" />

          {years.map((year) => (
            <div key={year} className="flex flex-col items-center relative">
              <button
                onClick={() => setSelectedYear(year)}
                className={`w-7 h-5 rounded-full border-2 border-gray-200 transition-all duration-300 z-10
                  ${
                    selectedYear === year
                      ? "bg-purple-700 scale-150"
                      : "bg-black"
                  }`}
                aria-label={`Year ${year}`}
              />
              <span
                className={`mt-4 text-sm ${
                  selectedYear === year ? "text-white" : "text-gray-600"
                }`}
              >
                {year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
