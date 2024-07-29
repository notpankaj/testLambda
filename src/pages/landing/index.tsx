import umbrellaImage from "../../assets/icons/umbrella.png";
import graphSvg from "../../assets/svg/graph1.svg";
import CustomerSupportImage from "../../assets/images/CustomerSupport.png";
import DashboardImage from "../../assets/images/Dashboard.png";
import PaymentsImage from "../../assets/images/Payments.png";
import PolicyManagementImage from "../../assets/images/PolicyManagement.png";
import InstaSvg from "../../assets/svg/instagram.svg";
import FbSvg from "../../assets/svg/Facebook.svg";
import LinkedInSvg from "../../assets/svg/linkedin.svg";
import TwitterSvg from "../../assets/svg/twitter.svg";
import AppLogoSvg from "../../assets/svg/Logo.svg";
import LandingGif from "../../assets/gif/LandingGif.gif";
import RizzArtSvg from "../../assets/svg/rizzArt.svg";
import bgOneSvg from "../../assets/svg/bg-1.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ShineSvg from "../../assets/svg/shine.svg";
import ShineWhiteSvg from "../../assets/svg/shine-white.svg";
import b0 from "../../assets/images/bi0.png";
import b1 from "../../assets/images/bi1.png";
import b2 from "../../assets/images/bi2.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import { useEffect, useRef } from "react";
import MapSection from "./MapSection";
import OurPartners from "../../components/OurPartner";
import TextReveal from "../../components/TextReveal/TextReveal";

const LandingPage = () => {
  const scrollContainerRef = useRef<HTMLSelectElement>(null);
  const scrollContainer2Ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      scrollContainerRef.current.scrollLeft = scrollWidth * 0.1;
    }
    if (scrollContainer2Ref.current) {
      const scrollWidth = scrollContainer2Ref.current.scrollWidth;
      scrollContainer2Ref.current.scrollLeft = scrollWidth * 0.3;
    }
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#F6F6F6] ">
      <Header />
      <NavBar />

      <section className="mx-[20px] flex flex-col bg-[#033F63] pb-[60px] mt-[-5px] rounded-[5px] px-[30px] py-[20px] ">
        <div className="flex flex-1">
          <div className="w-[55%] ">
            {/* <img className="mt-[50px] mb-[40px]" src={HeroTextSvg} /> */}
            <div className="h-[500px]mb-[40px]">
              <TextReveal text="SEARCHING" stroke />
              <div className="flex gap-[20px]">
                <TextReveal text="THE" stroke />
                <TextReveal text="BEST" />
              </div>
              <TextReveal text="INSURANCE" />
              <div className="flex gap-[20px]">
                <TextReveal text="QUOTE FOR" stroke />
                <TextReveal text="YOU" />
              </div>
            </div>

            <p className="text-[24px] font-light text-white">
              We help you save time in applications at Major Insurance
              Companies. No Spams, No Sales Calls, No Data Leaks*
            </p>
            <div className="flex mt-[20px]">
              <button className="bg-[#FEDC97] border-[#b9c4cb] border-[0px] hover:border-[4px]  mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
                <span className="text-[#033F63] font-semibold text-[16px]">
                  Upload Your Policy
                </span>
                <img src={ShineSvg} className="w-[20px] h-[20px]" />
              </button>
              <button className=" border-[#b9c4cb] border-[0px] hover:border-[4px] bg-[#FFFFFF] mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
                <span className="text-[#033F63] font-semibold text-[16px]">
                  Get Your Insurance
                </span>
              </button>
            </div>
          </div>
          <div className="w-[45%] flex justify-center items-center">
            <img className="" src={LandingGif} />
          </div>
        </div>
      </section>
      <OurPartners />
      <section className="mx-[20px] flex mt-[50px] gap-[20px] mb-[100px]">
        <div className="w-[430px] h-[400px] bg-[#033F63] rounded-[5px] p-[64px]  ">
          <img className="h-[32px] w-[32px]" src={ShineWhiteSvg} />
          <div className="flex flex-col  gap-[5px]">
            <span className="text-[40px] font-bold text-white">One</span>
            <span className="text-[40px] font-bold text-white">
              Application,
            </span>
            <span className="text-[40px] font-bold text-white">Multiple</span>
            <span className="text-[40px] font-bold text-white">Quotes</span>
          </div>
        </div>
        <div className=" custom-scroller">
          <div className="flex-1 h-[500px] xl:h-[602px] flex justify-center items-center">
            <img src={graphSvg} className="w-[100%] h-[100%] object-containe" />
          </div>
          <div className="flex-col flex-1 h-[300px]  xl:h-[400px] bg-white border border-[#033F63] rounded-[5px] text-[32px] text-[#033F63] font-light flex justify-center items-center mt-[20px]">
            <p className="w-[650px] text-[24px] xl:text-[32px]  px-[30px] xl:px-0">
              Simplify <b className="font-bold">your</b> insurance shopping with
              a few questions and your personal information will be only shared
              when you decide to purchase
            </p>
            <div className="w-[650px]  flex mt-[15px] px-[30px] xl:px-0">
              <button className="border-[#b9c4cb] border-[0px] hover:border-[4px] bg-[#FEDC97] mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
                <span className="text-[#033F63] font-semibold text-[16px]">
                  Upload Your Policy
                </span>
                <img src={ShineSvg} className="w-[20px] h-[20px]" />
              </button>
              <button className=" border-[#b9c4cb] border-[0px] hover:border-[4px] bg-[#fbfbfb] mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
                <span className="text-[#033F63] font-semibold text-[16px]">
                  Get Your Insurance
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[20px] flex mt-[50px] gap-[20px]">
        <div className="w-[430px] h-[400px] bg-[#033F63] rounded-[5px] p-[64px]  ">
          <img className="h-[32px] w-[32px] mt-[40px]" src={umbrellaImage} />
          <div className="flex flex-col  gap-[5px]">
            <span className="text-[40px] font-bold text-white">Manage</span>
            <span className="text-[40px] font-bold text-white">Your</span>
            <span className="text-[40px] font-bold text-white">Insurance</span>
          </div>
        </div>
        <div className="flex-1 h-[400px] bg-white border border-[#033F63] rounded-[5px] text-[32px] text-[#033F63] font-light flex justify-center items-center">
          <p className="w-[650px] text-[24px] xl:text-[32px]  px-[30px] xl:px-0">
            At Rizz Policy, we believe that everyone deserves to feel confident
            and secure in their insurance choices. That's why we go above and
            beyond to provide a personalized experience that puts our customers
            first.
          </p>
        </div>
      </section>
      <section className="mx-[20px] flex mt-[50px] gap-[20px] flex-col">
        <div className="flex gap-[10px] flex-1 justify-center">
          <div className="h-[220px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Policy Management
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Customize and manage memberships with schedule actions like
                pause, downgrade, or cancel
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px] flex items-center justify-center">
              <img
                src={PolicyManagementImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[220px] flex items-center   flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Payments
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Collect payments ahead of time online or in-person using our POS
                hardware
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px] flex items-center justify-center">
              <img
                src={PaymentsImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] flex-1  justify-center">
          <div className="h-[220px] flex items-center   flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold  text-[24px] xl:text-[32px] mb-[10px]">
                Quote Dashboard
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Live dashboard to track, review, and update your quotes from our
                insurance partner
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px] flex items-center justify-center">
              <img
                src={DashboardImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[220px] flex items-center   flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold  text-[24px] xl:text-[32px] mb-[10px]">
                24/7 Customer Support
              </h3>
              <p className="text-[#A2B1BF] font-light text-[18px] xl:text-[24px]">
                Streamline your customer communications with our in-app
                messenger to accelerate your growth
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px] flex items-center justify-center">
              <img
                src={CustomerSupportImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* clip */}
      <section className="flex mt-[30px] flex-col relative">
        <h1 className=" text-[32px] x:text-[40px] font-bold mx-auto text-[#033F63]">
          Our Rizz Is Not Just About Charm; It’s About Care.
        </h1>
        <div className="flex mx-auto w-[65%] min-h-[300px]">
          <div className="flex-1">
            <span className="text-[#033F63] text-[18px] xl:text-[24px]  font-light ">
              We are an independent insurance agency powered by AI that serves
              you as our priority. We will gather your insurance needs and we do
              the hard work with multiple insurance partners to get best quotes
              to fulfill your insurance needs.
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

      <section
        ref={scrollContainerRef}
        className="flex bg-[#033F63] py-[20px] px-[20px] hide-scrollbar  overflow-x-scroll "
      >
        <div className="h-[250px] gap-[30px] flex ">
          <div className="scroll-container flex">
            <div className=" w-[630px] bg-white h-[218px] rounded-[10px] p-[20px] flex-col">
              <div className="flex gap-[20px]">
                <div className="bg-gray-600  w-[50px] h-[50px] rounded-full">
                  <img className="w-[100%] h-[100%] rounded-full" src={p2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-[#0E1E2F]">
                    Jane Doe
                  </span>
                  <span className="text-[16px] text-[#757F87] font-light">
                    New York City, New York
                  </span>
                </div>
              </div>
              <span className="font-light text-[24px] mt-[15px]">
                “Rizz Policy made insurance so easy, I actually enjoyed the
                process! They saved me time and money, and their customer
                service was top-notch.”
              </span>
            </div>
            <div className="w-[630px] bg-white h-[218px] rounded-[10px] p-[20px] flex-col">
              <div className="flex gap-[20px]">
                <div className="bg-gray-600  w-[50px] h-[50px] rounded-full">
                  <img className="w-[100%] h-[100%] rounded-full" src={p1} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-[#0E1E2F]">
                    Jane Doe
                  </span>
                  <span className="text-[16px] text-[#757F87] font-light">
                    New York City, New York
                  </span>
                </div>
              </div>
              <span className="font-light text-[24px] mt-[15px]">
                “Rizz Policy made insurance so easy, I actually enjoyed the
                process! They saved me time and money, and their customer
                service was top-notch.”
              </span>
            </div>
            <div className="w-[630px] bg-white h-[218px] rounded-[10px] p-[20px] flex-col">
              <div className="flex gap-[20px]">
                <div className="bg-gray-600  w-[50px] h-[50px] rounded-full">
                  <img className="w-[100%] h-[100%] rounded-full" src={p2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-[#0E1E2F]">
                    Jane Doe
                  </span>
                  <span className="text-[16px] text-[#757F87] font-light">
                    New York City, New York
                  </span>
                </div>
              </div>
              <span className="font-light text-[24px] mt-[15px]">
                “Rizz Policy made insurance so easy, I actually enjoyed the
                process! They saved me time and money, and their customer
                service was top-notch.”
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={scrollContainer2Ref}
        className=" hide-scrollbar flex bg-[#033F63] py-[20px] pt-[0] px-[20px]  overflow-x-scroll "
      >
        <div className="h-[250px] gap-[30px] flex ">
          <div className="reverse-scroll-container">
            <div className=" w-[630px] bg-white h-[218px] rounded-[10px] p-[20px] flex-col">
              <div className="flex gap-[20px]">
                <div className="bg-gray-600  w-[50px] h-[50px] rounded-full">
                  <img className="w-[100%] h-[100%] rounded-full" src={p1} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-[#0E1E2F]">
                    Jane Doe
                  </span>
                  <span className="text-[16px] text-[#757F87] font-light">
                    New York City, New York
                  </span>
                </div>
              </div>
              <span className="font-light text-[24px] mt-[15px]">
                “Rizz Policy made insurance so easy, I actually enjoyed the
                process! They saved me time and money, and their customer
                service was top-notch.”
              </span>
            </div>
            <div className="w-[630px] bg-white h-[218px] rounded-[10px] p-[20px] flex-col">
              <div className="flex gap-[20px]">
                <div className="bg-gray-600  w-[50px] h-[50px] rounded-full">
                  <img className="w-[100%] h-[100%] rounded-full" src={p2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-[#0E1E2F]">
                    Jane Doe
                  </span>
                  <span className="text-[16px] text-[#757F87] font-light">
                    New York City, New York
                  </span>
                </div>
              </div>
              <span className="font-light text-[24px] mt-[15px]">
                “Rizz Policy made insurance so easy, I actually enjoyed the
                process! They saved me time and money, and their customer
                service was top-notch.”
              </span>
            </div>
            <div className="w-[630px] bg-white h-[218px] rounded-[10px] p-[20px] flex-col">
              <div className="flex gap-[20px]">
                <div className="bg-gray-600  w-[50px] h-[50px] rounded-full">
                  <img className="w-[100%] h-[100%] rounded-full" src={p1} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-[#0E1E2F]">
                    Jane Doe
                  </span>
                  <span className="text-[16px] text-[#757F87] font-light">
                    New York City, New York
                  </span>
                </div>
              </div>
              <span className="font-light text-[24px] mt-[15px]">
                “Rizz Policy made insurance so easy, I actually enjoyed the
                process! They saved me time and money, and their customer
                service was top-notch.”
              </span>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="flex bg-[#033F63] py-[20px]  flex-col mx-auto px-[5%] pb-[100px]">
        <h1 className="text-white text-[40px] font-bold">Tools and Tips</h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-[50px] mt-[20px] flex flex-1 justify-evenly w-full gap-[20px]">
            <div className="w-[380px] h-[523px] bg-white rounded-[5px] overflow-hidden">
              <div className="bg-gray-400 h-[280px]">
                <img src={b0} className="w-[100%] h-[100%]" />
              </div>
              <div className="flex flex-col p-[20px]">
                <h6 className="text-[#033F63] text-[24px] font-bold">
                  Had an accident in the gym? Here are what you should know
                  about your insurance coverage
                </h6>
                <span className="text-[16px] font-light">John Doe</span>
                <span className="text-[16px] font-light">February 2, 2024</span>
              </div>
            </div>
            <div className="w-[380px] h-[523px] bg-white rounded-[5px] overflow-hidden">
              <div className="bg-gray-400 h-[280px]">
                <img src={b1} className="w-[100%] h-[100%]" />
              </div>
              <div className="flex flex-col p-[20px]">
                <h6 className="text-[#033F63] text-[24px] font-bold">
                  How long do people usually shop for insurance? Here are the
                  five tips to buy insurance.
                </h6>
                <span className="text-[16px] font-light">John Doe</span>
                <span className="text-[16px] font-light">February 2, 2024</span>
              </div>
            </div>
            <div className="w-[380px] h-[523px] bg-white rounded-[5px] overflow-hidden">
              <div className="bg-gray-400 h-[280px]">
                <img src={b2} className="w-[100%] h-[100%]" />
              </div>
              <div className="flex flex-col p-[20px]">
                <h6 className="text-[#033F63] text-[24px] font-bold ">
                  Got a New Car? What to Expect next.
                </h6>
                <span className="text-[16px] font-light">John Doe</span>
                <span className="text-[16px] font-light">February 2, 2024</span>
              </div>
            </div>
          </div>
          <button className="bg-[#FFFFFF] mr-[20px] w-[85px] h-[30px] rounded-[4px]">
            <span className="text-[#033F63] text-[16px]">View More</span>
          </button>
        </div>
      </section>
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
      <section className="flex gap-[20px] flex-col mt-[50px] bg-white h-[570px] justify-center items-center ">
        <h1 className="mx-auto font-bold text-[40px] text-[#033F63]">
          See how it all works for you!
        </h1>
        <p className="mx-auto max-w-[800px] text-center font-light text-[24px] text-[#033F63]">
          At Rizz Policy, we believe that everyone deserves to feel confident
          and secure in their insurance choices. That's why we go above and
          beyond to provide a personalized experience that puts our customers
          first.
        </p>
        <button className="bg-[#FEDC97] border-[#b9c4cb] border-[0px] hover:border-[4px] mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
          <span className="text-[#033F63] font-semibold text-[16px]">
            Upload Your Policy
          </span>
          <img src={ShineSvg} className="w-[20px] h-[20px]" />
        </button>
      </section>
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

export default LandingPage;
