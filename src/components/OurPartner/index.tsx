import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1Image from "../../assets/images/company/c1.png";
import c2Image from "../../assets/images/company/c2.png";
import c3Image from "../../assets/images/company/c3.png";
import c4Image from "../../assets/images/company/c4.png";
import c5Image from "../../assets/images/company/c5.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const OurPartners = () => {
  return (
    <section className="mx-[20px] flex flex-col mt-[50px]">
      <h1 className="mx-auto text-[40px] font-[700] text-[#033F63]">
        Our Insurance Partners
      </h1>
      <div className="mx-auto  w-[80%] my-[50px] ">
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={1000}
          arrows={false}
        >
          <div className="h-[70px]m-[5px] flex items-center justify-center">
            <img className="h-[70px] object-contain " src={c1Image} />
          </div>
          <div className="h-[70px]m-[5px] flex items-center justify-center">
            <img className="h-[70px] object-contain " src={c2Image} />
          </div>
          <div className="h-[70px]m-[5px] flex items-center justify-center">
            <img className="h-[70px] object-contain " src={c3Image} />
          </div>
          <div className="h-[70px]m-[5px] flex items-center justify-center">
            <img className="h-[70px] object-contain " src={c4Image} />
          </div>
          <div className="h-[70px]m-[5px] flex items-center justify-center">
            <img className="h-[70px] object-contain " src={c5Image} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default OurPartners;
