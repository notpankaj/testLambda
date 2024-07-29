import umbrellaImage from "../../assets/icons/umbrella.png";
import uploadImage from "../../assets/images/upload.png";
import PaymentsImage from "../../assets/images/Payments.png";
import PolicyManagementImage from "../../assets/images/PolicyManagement.png";
import InstaSvg from "../../assets/svg/instagram.svg";
import FbSvg from "../../assets/svg/Facebook.svg";
import LinkedInSvg from "../../assets/svg/linkedin.svg";
import TwitterSvg from "../../assets/svg/twitter.svg";
import AppLogoSvg from "../../assets/svg/Logo.svg";
import HeroSvg from "../../assets/svg/Review policy.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import DashboardImage from "../../assets/images/Dashboard.png";
import CustomerSupportImage from "../../assets/images/CustomerSupport.png";
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "#fff" : "#fff" }}
        onClick={toggleAccordion}
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          width: "800px",
          position: "relative",
          borderRadius: "5px",
        }}
      >
        <span className=" text-[#033F63] text-md font-light"> {title}</span>
        {isOpen ? (
          <HiMinus
            className="absolute top-[10px] right-[20px] z-10 text-xl"
            color="#033F63"
          />
        ) : (
          <FiPlus
            className="absolute top-[10px] right-[20px] z-10 text-xl"
            color="#033F63"
          />
        )}
      </motion.div>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <div
          style={{
            padding: "10px",
            borderTop: "none",
            width: "800px",
            background: "#fff",
            paddingLeft: 20,
          }}
        >
          <span className=" text-black text-sm ">{content}</span>
        </div>
      </motion.div>
    </div>
  );
};
const DATA = [
  {
    title: "What types of insurance polices can I Upload?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "How secure is my policy document?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "What formats are supported for document uploads?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "How long does it take to receive the report?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "Can I ask follow-up questions after receiving my report?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "How can I access my report once it's ready?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "What if I need help understanding my report?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
  {
    title: "Can I use this service multiple times?",
    data: "We support the most common document formats: JPG, PNG, PDF, DOCX, and TXT. This flexibility ensures you can easily upload your policy documents without hassle.",
  },
];

const PolicyReview = () => {
  // const [activeFaqIndex, setActiveFaqIndex] = useState<null | number>(null);
  return (
    <div className="min-h-[100vh] bg-[#F6F6F6]">
      <Header />
      <NavBar />
      <section className="mx-[20px] flex flex-col bg-[#033F63] pb-[60px]  mt-[-5px] rounded-[5px] px-[30px] py-[20px] ">
        <div className="flex flex-1">
          <div className="w-[55%] flex flex-col justify-evenly">
            <h1 className="mt-[20px] text-white font-extrabold text-[64px] leading-none ">
              Get Your <br />
              Insurance Policy <br /> Reviewed TODAY!
            </h1>
            <p className="text-white font-medium text-[24px]">
              Our AI-powered feature is designed to help you understand your
              coverage, identify any potential gaps, and optimize your policy to
              better suit your needs. Whether you have questions about your
              current policy or simply want a professional opinion, we're here
              to help!
            </p>
            <div className="flex mt-[20px]">
              <button className="bg-[#FEDC97] border-[#b9c4cb] border-[0px] hover:border-[4px] mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
                <span className="text-[#033F63] font-semibold text-[16px]">
                  Upload Your Policy
                </span>
              </button>
            </div>
          </div>
          <div className="w-[45%] flex justify-center items-center">
            <img className="" src={HeroSvg} />
          </div>
        </div>
      </section>
      <section className="mx-[20px] flex flex-col mt-[50px]">
        <h1 className="mx-auto text-[40px] font-[700] text-[#033F63]">
          Our Features
        </h1>
        <div className="flex gap-[30px] mt-[30px]  flex-1 justify-center">
          <div className="h-[230px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Expert Analysis
              </h3>
              <p className="text-[#A2B1BF] font-light  text-[14px] xl:text-[16px]">
                Receive a detailed and professional review of your current
                insurance policy.
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px]flex items-center justify-center">
              <img
                src={DashboardImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[230px] flex items-center   flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Identify Coverage Gaps
              </h3>
              <p className="text-[#A2B1BF] font-light  text-[14px] xl:text-[16px]">
                Our analysis identifies these gaps, providing you with the
                knowledge needed to make informed decisions about additional
                coverage.
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px] flex items-center justify-center">
              <img
                src={PolicyManagementImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] mt-[30px]  flex-1 justify-center">
          <div className="h-[230px] flex items-center  flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold text-[24px] xl:text-[32px] mb-[10px]">
                Optimize Your Policy
              </h3>
              <p className="text-[#A2B1BF] font-light  text-[14px] xl:text-[16px]">
                Based on your unique needs and lifestyle, we offer personalized
                suggestions to enhance your current policy.
              </p>
            </div>
            <div className="w-[120px] xl:w-[180px] flex items-center justify-center">
              <img
                src={PaymentsImage}
                className="w-[100px] h-[112px] object-contain"
              />
            </div>
          </div>
          <div className="h-[230px] flex items-center   flex-1 max-w-[650px] border border-[#A2B1BF] rounded-[8px] hover:bg-[#033F63] transition-all duration-500">
            <div className="flex-1 p-[20px] ">
              <h3 className=" text-[#A2B1BF] font-bold  text-[24px] xl:text-[32px] mb-[10px]">
                Get Your Questions Answered by Professionals
              </h3>
              <p className="text-[#A2B1BF] font-light text-[14px] xl:text-[16px]">
                Our feature translates this into simple, easy-to-understand
                language and provides answers to any questions you may have,
                ensuring you feel confident about your coverage.
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

      <section className="mx-[20px] flex mt-[50px] gap-[20px]">
        <div className="w-[390px] h-[320px] bg-[#033F63] rounded-[5px] p-[64px]  ">
          <img className="h-[32px] w-[32px] mt-[40px]" src={umbrellaImage} />
          <div className="flex flex-col  gap-[5px]">
            <span className="text-[40px] font-bold text-white">
              How it Works
            </span>
          </div>
        </div>
        <div className="flex-1 custom-scroller">
          <div className="mb-[15px] flex-1 flex-col  justify-evenly h-[320px] bg-white border border-[#033F63] rounded-[5px] text-[32px] text-[#033F63] font-light flex items-center relative">
            <p className="text-[#033F63] font-bold text-[32px]">
              Upload Your Policy Document
            </p>
            <p className="text-[#033F63] font-light text-[32px] absolute bottom-[30px] right-[40px]">
              1
            </p>
            <img src={uploadImage} className="h-[120px]" />
          </div>
          <div className="mb-[15px] flex-1 flex-col  justify-evenly h-[320px] bg-white border border-[#033F63] rounded-[5px] text-[32px] text-[#033F63] font-light flex items-center relative">
            <p className="text-[#033F63] font-bold text-[32px]">
              Hand it to our AI Analysis Tool
            </p>
            <p className="text-[#033F63] font-light text-[32px] absolute bottom-[30px] right-[40px]">
              2
            </p>
            <img src={uploadImage} className="h-[120px]" />
          </div>
          <div className="mb-[15px] flex-1 flex-col  justify-evenly h-[320px] bg-white border border-[#033F63] rounded-[5px] text-[32px] text-[#033F63] font-light flex items-center relative">
            <p className="text-[#033F63] font-bold text-[32px]">
              Generate your Comprehensive Report
            </p>
            <p className="text-[#033F63] font-light text-[32px] absolute bottom-[30px] right-[40px]">
              3
            </p>
            <img src={uploadImage} className="h-[120px]" />
          </div>
          <div className="flex-1 flex-col  justify-evenly h-[320px] bg-white border border-[#033F63] rounded-[5px] text-[32px] text-[#033F63] font-light flex items-center relative">
            <p className="text-[#033F63] font-bold text-[32px] text-center">
              You are only seconds away from your <br /> ideal insurance policy!
            </p>
            <button className="bg-[#FEDC97] border-[#b9c4cb] border-[0px] hover:border-[4px] mr-[20px] w-[200px] h-[40px] rounded-[4px] flex justify-center items-center">
              <span className="text-[#033F63] font-semibold text-[16px]">
                Upload Your Policy
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-[20px] flex mt-[100px] gap-[20px] flex-col">
        <h1 className="mx-auto font-bold text-[40px] text-[#033F63]">
          Frequently asked Questions
        </h1>
        <p className="mx-auto max-w-[749px] text-center font-light text-[24px] text-[#033F63]">
          We hope you've found the information on our website helpful. If you
          have any further questions, please don't hesitate to reach out to us.
          We're here to help you make the best decision for your insurance
          needs.
        </p>
      </section>

      <section className=" flex items-center justify-center flex-col gap-[20px] my-[30px]">
        {DATA.map((item, index) => {
          return (
            <Accordion key={index} title={item.title} content={item.data} />
          );
        })}
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

export default PolicyReview;
