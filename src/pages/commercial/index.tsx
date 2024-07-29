import InstaSvg from "../../assets/svg/instagram.svg";
import FbSvg from "../../assets/svg/Facebook.svg";
import LinkedInSvg from "../../assets/svg/linkedin.svg";
import TwitterSvg from "../../assets/svg/twitter.svg";
import AppLogoSvg from "../../assets/svg/Logo.svg";
import HeroSvg from "../../assets/svg/Commercial.png";
import RizzArtSvg from "../../assets/svg/rizzArt.svg";
import bgOneSvg from "../../assets/svg/bg-1.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ShineSvg from "../../assets/svg/shine.svg";
import ImageOne from "../../assets/images/Cyber Ins.png";
import ImageTwo from "../../assets/images/Gear.png";
import ImageThree from "../../assets/images/General.png";
import ImageFour from "../../assets/images/Owner.png";
import ImageFive from "../../assets/images/Professional.png";
import ImageSix from "../../assets/images/Property.png";
import ContactBox from "./ContactBox";
import OurPartners from "../../components/OurPartner";

const CommercialPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#F6F6F6] ">
      <Header />
      <NavBar />
      <section className="mx-[20px] flex flex-col bg-[#033F63] pb-[60px]  mt-[-5px] rounded-[5px] px-[30px] py-[20px] ">
        <div className="flex flex-1">
          <div className="w-[50%] flex  flex-col  justify-between gap-[20px] ">
            <h1 className="mt-[20px] text-white font-extrabold text-[64px] leading-none">
              Protect Your <br /> Business with <br />
              Comprehensive Coverage
            </h1>
            <p className="text-white font-medium text-[24px]">
              We understand that every business is unique, and so are its
              insurance needs. That's why we offer a range of commercial
              insurance products designed to protect your business from
              potential risks and ensure its continued success. Let us handle
              your insurance needs while you focus on growing your business.
            </p>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img className="h-[440px]" src={HeroSvg} />
          </div>
        </div>
      </section>

      <section className="mx-[20px] flex flex-col mt-[50px]">
        <h1 className="mx-auto text-[40px] font-[700] text-[#033F63]">
          Our Products!
        </h1>
        <div className="hide-scrollbar h-[150px] w-[80%] mx-auto flex justify-center items-center gap-[40px] overflow-x-scroll">
          <button className="bg-[#FEDC97] border-[#b9c4cb] border-[0px] hover:border-[4px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
            <span className="text-[#033F63] font-semibold text-[16px]">
              Upload Your Policy
            </span>
            <img src={ShineSvg} className="w-[20px] h-[20px]" />
          </button>
          <button className=" hover:border-[#b9c4cb] border hover:border-[4px] border-[#033F63] bg-[#FFFFFF]  w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
            <span className="text-[#033F63] font-semibold text-[16px]">
              Get Your Insurance
            </span>
          </button>
        </div>
      </section>

      <section className="mx-[20px] flex mt-[50px] gap-[20px] flex-col">
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] xl:h-[270px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px]  group hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] group-hover:text-white font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Business Owners Policy
              </h3>
              <p className="text-[#A2B1BF] group-hover:text-white  font-light text-[14px] xl:text-[16px]">
                A comprehensive package that combines general liability and
                property insurance, tailored for small to medium-sized
                businesses.
              </p>
              <h3 className="group-hover:text-white  text-[#A2B1BF] font-bold text-[18px] xl:text-[24px] mb-[10px]">
                FROM $5/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={ImageFour}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[220px] xl:h-[270px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] group hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className="group-hover:text-white  text-[#A2B1BF] font-bold  text-[24px] xl:text-[32px] mb-[10px]">
                General Liability Insurance
              </h3>
              <p className="text-[#A2B1BF] group-hover:text-white  font-light  text-[14px] xl:text-[16px]">
                Protects your business from claims of bodily injury, property
                damage, and personal injury arising from your business
                operations.
              </p>
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[18px] xl:text-[24px] mb-[10px]">
                FROM $25/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px]  flex items-center justify-center">
              <img
                src={ImageThree}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] xl:h-[270px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] group hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Professional Liability Insurance
              </h3>
              <p className="text-[#A2B1BF] group-hover:text-white  font-light text-[14px] xl:text-[16px]">
                Covers legal costs from claims of negligence, malpractice, or
                errors in professional services.
              </p>
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[18px] xl:text-[24px] mb-[10px]">
                FROM $90/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={ImageFive}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[220px] xl:h-[270px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] group hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Commercial Property Insurance
              </h3>
              <p className="text-[#A2B1BF] group-hover:text-white  font-light text-[14px] xl:text-[16px]">
                Safeguards your business property, including buildings,
                equipment, inventory, and furniture, against damage or loss due
                to fire, theft, and other covered events.
              </p>
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[18px] xl:text-[24px] mb-[10px]">
                FROM $25/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={ImageSix}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] xl:h-[270px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] group hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[24px] xl:text-[32px]  mb-[10px]">
                Cyber Insurance
              </h3>
              <p className="text-[#A2B1BF] group-hover:text-white  font-light text-[14px] xl:text-[16px]">
                Protects your business against cyber threats, including data
                breaches, cyberattacks, and other internet-based risks.
              </p>
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[18px] xl:text-[24px] mb-[10px]">
                FROM $5/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={ImageOne}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[220px] xl:h-[270px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] group hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[24px] xl:text-[32px]] mb-[10px]">
                Commercial Property Insurance
              </h3>
              <p className="text-[#A2B1BF] group-hover:text-white  font-light text-[14px] xl:text-[16px]">
                Safeguards your business property, including buildings,
                equipment, inventory, and furniture, against damage or loss due
                to fire, theft, and other covered events.
              </p>
              <h3 className=" text-[#A2B1BF] group-hover:text-white  font-bold text-[18px] xl:text-[24px] mb-[10px]">
                FROM $25/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={ImageTwo}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* clip */}
      <section className=" flex mt-[30px] flex-col relative">
        <h1 className="text-[40px] font-bold  text-[#033F63] ml-[10%]">
          Why Rizz?
        </h1>
        <div className="flex mx-auto ml-[10%] min-h-[300px]">
          <div className="flex-1">
            <span className="text-[#033F63] text-[24px] font-light ">
              At Rizz Policy, we act as your dedicated buying agent, shopping
              for the best insurance deals to save you time and money. Our
              expertise and industry connections ensure you get the most
              comprehensive coverage at competitive rates. Let us simplify the
              insurance process for you, so you can focus on what you do
              best—running your business.
            </span>
          </div>
          <div className="flex-1 relative">
            <img
              className="absolute bottom-[-200px] h-[400px]"
              src={RizzArtSvg}
            />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgOneSvg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
            width: "100%",
          }}
          className=" h-[200px]"
        ></div>
      </section>

      <ContactBox />

      <OurPartners />
      <section className="bg-[#033F63] h-[580px] mt-[150px]  flex justify-center items-center">
        <div className="w-[530px] flex  flex-col justify-center items-center gap-[50px]">
          <div className="flex justify-center items-center gap-[40px]">
            <img className="h-[80px] w-[200px]" src={AppLogoSvg} />
            <div>
              <span className="text-white text-[24px]">
                About Us <br /> Contact Us <br /> Privacy Notice <br />
                Terms of Use
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-light text-center text-white text-[16px]">
              © 2024 Rizz Policy is here to simplify your renter insurance
              process. Connect with us on our social media platforms.
            </span>
            <div className="flex gap-[20px] mt-[30px]">
              <img className="w-[30px] h-[30px]" src={FbSvg} />
              <img className="w-[30px] h-[30px]" src={InstaSvg} />
              <img className="w-[30px] h-[30px]" src={TwitterSvg} />
              <img className="w-[30px] h-[30px]" src={LinkedInSvg} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPage;
