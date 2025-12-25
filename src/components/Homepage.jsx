import React, { useState, useRef, useEffect } from "react";

const tabData = [
  {
    id: 0,
    title: "The Studio",
    desc: "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. Sed ayd minim veniam.",
    TotalArea: "2800 sq ft",
    Bedroom: "150 Sq. Ft",
    Bathroom: "45 Sq. Ft",
    Balcony: "Allowed",
    Lounge: "650 Sq. Ft",
    image: "/image/10.png",
  },
  {
    id: 1,
    title: "Deluxe Portion",
    desc: "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. Sed ayd minim veniam.",
   TotalArea: "2800 sq ft",
   Bedroom: "150 Sq. Ft",
   Bathroom: "45 Sq. Ft",
   Balcony: "Allowed",
   Lounge: "650 Sq. Ft",
   image: "/image/10.png",
  },
  {
    id: 2,
    title: "Penthouse",
    desc: "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. Sed ayd minim veniam.",
    TotalArea: "2800 sq ft",
   Bedroom: "150 Sq. Ft",
   Bathroom: "45 Sq. Ft",
   Balcony: "Allowed",
   Lounge: "650 Sq. Ft",
   image: "/image/10.png",
  },
  {
    id: 3,
    title: "Top Garden",
    desc: "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. Sed ayd minim veniam.",
    TotalArea: "2800 sq ft",
    Bedroom: "150 Sq. Ft",
    Bathroom: "45 Sq. Ft",
    Balcony: "Allowed",
    Lounge: "650 Sq. Ft",
    image: "/image/10.png",
  },
  {
    id: 4,
    title: "Double Hieght",
    desc: "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. Sed ayd minim veniam.",
    TotalArea: "2800 sq ft",
    Bedroom: "150 Sq. Ft",
    Bathroom: "45 Sq. Ft",
    Balcony: "Allowed",
    Lounge: "650 Sq. Ft",
    image: "/image/10.png",
  },
];

/* ---------- Reusable Row ---------- */
const Row = ({ label, value }) => (
  <div className="flex items-center gap-3">
    <span className="whitespace-nowrap">{label}</span>
    <div className="flex-grow border-b border-white/60"></div>
    <span className="whitespace-nowrap">{value}</span>
  </div>
);

/* ---------- Card ---------- */
const Card = ({ TotalArea, Bedroom, Bathroom, Balcony, Lounge }) => (
  <div className="flex flex-col mt-10 gap-4">
    <Row label="Total Area" value={TotalArea} />
    <Row label="Bedroom" value={Bedroom} />
    <Row label="Bathroom" value={Bathroom} />
    <Row label="Balcony/Pets" value={Balcony} />
    <Row label="Lounge" value={Lounge} />
  </div>
);

/* ---------- Homepage ---------- */
const Homepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const [tabWidths, setTabWidths] = useState([]);

  useEffect(() => {
    setTabWidths(tabRefs.current.map(ref => ref?.offsetWidth || 0));
  }, []);

  return (
    <div className="w-full px-4 lg:px-24 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="inline-block bg-orange-50 px-6 py-2 rounded-full">
          <span className="text-orange-600">Apartment Sketch</span>
        </div>
        <h1 className="text-4xl font-bold mt-6">Apartments Plan</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-19 mb-14">
        {tabData.map((item, idx) => (
          <div key={item.id} className="flex flex-col items-center ">
            <span
              ref={el => (tabRefs.current[idx] = el)}
              onClick={() => setActiveTab(item.id)}
              className={`cursor-pointer text-lg ${
                activeTab === item.id
                  ? "text-[#ff5a3c]"
                  : "text-gray-800"
              }`}
            >
              {item.title}
            </span>

            {activeTab === item.id && (
              <div className="flex items-center gap-1 mt-2">
                <div
                  className="h-1 bg-[#ff5a3c] rounded"
                  style={{ width: tabWidths[idx] / 2 || 36 }}
                ></div>
                <div className="w-1 h-1 bg-[#ff5a3c] rounded-full"></div>
                <div
                  className="h-1 bg-[#ff5a3c] rounded"
                  style={{ width: tabWidths[idx] / 2 || 36 }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Left Card */}
        <div className="bg-[#ff5a3c] text-white p-10 w-full lg:w-1/2 xl:w-5/12 2xl:w-5/12">

          <h2 className="text-2xl font-bold">
            {tabData[activeTab].title}
          </h2>

          <p className="mt-6 text-base leading-relaxed">
            {tabData[activeTab].desc}
          </p>

          <Card {...tabData[activeTab]} />
        </div>

        {/* Right Image */}
       <div className="w-full lg:w-1/2 xl:w-5/12 2xl:w-5/12
">

          <img
            src={tabData[activeTab].image}
            alt="Apartment Plan"
            className="w-full h-auto object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
