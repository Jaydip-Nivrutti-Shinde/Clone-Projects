import { useState } from "react";
import { grovceryCity } from "../DataSet/groceryCityData"; 
import CityBox from "./citybox";

export default function GrovcerCityOption() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, grovceryCity.length));
  };

  const handleShowLess = () => {
    setVisibleCount(12);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const visibleCities = grovceryCity.slice(0, visibleCount);
  const hasMore = visibleCount < grovceryCity.length;
  const hasLess = visibleCount > 12;

  return (
    <div className="max-w-[80%] container mx-auto my-20">
      <h1 className="text-xl font-bold mb-5">Cities with food delivery</h1>
      
      <div className="flex flex-wrap">
        {visibleCities.map((item, index) => (
          <CityBox key={index} item={item} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-5 px-10">
        {hasMore && (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
          >
            Show More
          </button>
        )}

        {hasLess && (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 bg-gray-300 text-black rounded-xl hover:bg-gray-400 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
