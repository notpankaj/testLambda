import UsaMap from "../../assets/svg/usa-map.svg";
import UsaMapActive from "../../assets/images/usa_map_active.png";
import umbrellaImage from "../../assets/icons/umbrella.png";
import { useEffect, useRef, useState } from "react";

const MapSection = () => {
  const sectionRef = useRef<HTMLSelectElement>(null);
  const [mapImage, setMapImage] = useState(1);
  useEffect(() => {
    if (sectionRef.current === null) return;

    sectionRef.current?.addEventListener("mouseenter", () => {
      setMapImage(2);
    });
    sectionRef.current?.addEventListener("mouseleave", () => {
      setMapImage(1);
    });
    return () => {
      sectionRef.current?.removeEventListener("mouseenter", () => {});
    };
  }, []);

  console.log(mapImage, "here");

  return (
    <section className="flex mt-[50px] mx-auto w-[95%] group" ref={sectionRef}>
      <div className="flex flex-1 bg-white h-[400px]">
        {mapImage === 2 ? (
          <img src={UsaMapActive} className="h-[100%] object-contain" />
        ) : (
          <img src={UsaMap} className="h-[100%] object-contain" />
        )}
      </div>
      <div className="w-[430px] h-[400px] bg-[#033F63] group-hover:bg-[#FEDC97] rounded-[5px] p-[64px]  ">
        <img className="h-[32px] w-[32px] mt-[40px]" src={umbrellaImage} />
        <div className="flex flex-col  gap-[5px]">
          <span className="text-[40px] font-bold text-white group-hover:text-[#033F63]">
            {mapImage === 2 ? "Comming to" : "New York and"}
          </span>
          <span className="text-[40px] font-bold text-white group-hover:text-[#033F63]">
            {" "}
            {mapImage === 2 ? "More States" : "New Jersey"}
          </span>
          <span className="text-[40px] font-bold text-white group-hover:text-[#033F63]">
            {mapImage === 2 ? "Soon" : "Today "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
