import InstaSvg from "../../assets/svg/instagram.svg";
import FbSvg from "../../assets/svg/Facebook.svg";
import LinkedInSvg from "../../assets/svg/linkedin.svg";
import TwitterSvg from "../../assets/svg/twitter.svg";
import AppLogoSvg from "../../assets/svg/Logo.svg";
import CartImage from "../../assets/images/Shopping.png";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import AutoImage from "../../assets/images/Auto.png";
import HomeownerImage from "../../assets/images/Homeowner.png";
import PetImage from "../../assets/images/Pet.png";
import RentersImage from "../../assets/images/Renters.png";
import TravelImage from "../../assets/images/Travel.png";
import UmbrellaImage from "../../assets/images/Umbrella.png";
import MapSection from "../landing/MapSection";
import OurPartners from "../../components/OurPartner";

const ShopPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#F6F6F6] ">
      <Header />
      <NavBar />
      <section className="mx-[20px] flex flex-col bg-[#033F63] pb-[60px]  mt-[-5px] rounded-[5px] px-[30px] py-[20px] ">
        <div className="flex flex-1">
          <div className="w-[50%] flex  flex-col  justify-between gap-[20px] ">
            <h1 className="mt-[20px] text-white font-extrabold text-[64px] leading-none">
              Get Coverage for
              <br /> You and Your <br />
              Loved Ones in
              <br /> Minutes
            </h1>
            <p className="text-white font-medium text-[24px]">
              At Rizz Policy, we make it easy for you to find the perfect
              insurance coverage tailored to your unique needs. Whether you're
              looking to protect your home, car, pets, or travels, we have you
              covered. Our comprehensive range of personal insurance products
              ensures that you can safeguard what matters most with confidence
              and ease.
            </p>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img className="h-[440px]" src={CartImage} />
          </div>
        </div>
      </section>
      <section className="mx-[20px]  flex flex-col mt-[50px]">
        <h1 className="mx-auto text-[40px] font-[700] text-[#033F63]">
          Our Products!
        </h1>
        <div className="hide-scrollbar h-[150px] w-[80%] mx-auto flex justify-center items-center gap-[40px] overflow-x-scroll">
          <button className="border-[#b9c4cb] border-[0px] hover:border-[4px] bg-[#FEDC97]  w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
            <span className="text-[#033F63] font-semibold text-[16px]">
              Upload Your Policy
            </span>
          </button>
          <button className=" border-[#b9c4cb] border-[0px] hover:border-[4px] bg-[#FFFFFF]  w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
            <span className="text-[#033F63] font-semibold text-[16px]">
              Get Your Insurance
            </span>
          </button>
        </div>
      </section>

      <section className="mx-[20px] flex mt-[50px] gap-[20px] flex-col">
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[32px] mb-[10px]">
                Renters
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Coverage for your stuff, inand out of your home
              </p>
              <h3 className=" text-[#A2B1BF] font-bold text-[18px] xl:text-[24px]  mb-[10px]">
                FROM $5/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={RentersImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>

          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Homeowners
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Protection for your home and belonings
              </p>
              <h3 className=" text-[#A2B1BF] font-bold text-[18px] xl:text-[24px]  mb-[10px]">
                FROM $25/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px]  flex items-center justify-center">
              <img
                src={HomeownerImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Auto
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Protect your car, passengers, and the planet
              </p>
              <h3 className=" text-[#A2B1BF] font-bold text-[18px] xl:text-[24px]   mb-[10px]">
                FROM $90/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={AutoImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>

          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Pet
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Protect you fluffy friends and your wallet
              </p>
              <h3 className=" text-[#A2B1BF] font-bold text-[18px] xl:text-[24px]  mb-[10px]">
                FROM $25/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px]  flex items-center justify-center">
              <img
                src={PetImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Travel
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Protect your travel experience from unexpected incidents
              </p>
              <h3 className=" text-[#A2B1BF] font-bold text-[18px] xl:text-[24px]  mb-[10px]">
                FROM $5/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px] flex items-center justify-center">
              <img
                src={TravelImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>

          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Umbrella
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Extra liability coverage beyond your existing policies for major
                claims.
              </p>
              <h3 className=" text-[#A2B1BF] font-bold text-[18px] xl:text-[24px]  mb-[10px]">
                FROM $25/MO
              </h3>
            </div>
            <div className="w-[140px] xl:w-[180px]  flex items-center justify-center">
              <img
                src={UmbrellaImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <OurPartners />
      <section className="mx-[20px] flex mt-[100px] gap-[20px] flex-col">
        <h1 className="mx-auto font-bold text-[40px] text-[#033F63]">
          Now Serving New York and New Jersey!
        </h1>
        <p className="mx-auto max-w-[749px] text-center font-light text-[24px] text-[#033F63]">
          We proudly offer our services to residents of New York and New Jersey,
          providing the best insurance solutions tailored to your needs. And
          we're just getting started! Stay tuned as we expand our coverage to
          more states, bringing our top-notch insurance products to even more
          communities soon.
        </p>
      </section>

      <MapSection />

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

export default ShopPage;
