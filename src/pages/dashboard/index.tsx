import NavBar from "../../components/NavBar";
import Hero from "../../assets/images/dashboardhero.png";
import UploadImage from "../../assets/images/upload.png";
import InsuranceImage from "../../assets/images/insurance.png";
import UmbrellaImage from "../../assets/images/Umbrella.png";
import ShineSvg from "../../assets/svg/shine.svg";
import MessageSvg from "../../assets/svg/icons/message.svg";
import PolicieSvg from "../../assets/svg/icons/policie.svg";
import QuoteSvg from "../../assets/svg/icons/quotes.svg";
import SupportSvg from "../../assets/svg/icons/support.svg";

const Dashboard = () => {
  return (
    <div className="min-h-[100vh] bg-[#F6F6F6] ">
      <NavBar />

      <div className="flex  m-[20px] ">
        <div className="flex  flex-col flex-1">
          <div className="flex flex-1 mx-[20px]">
            <div className="flex-1 flex flex-col justify-evenly">
              <h1 className="font-extrabold text-[55px] xl:text-[60px] text-[#033F63]">
                Thank you for getting this far!
              </h1>
              <p className="font-medium text-[18px] xl:text-[24px] text-[#033F63]">
                At the moment Rizz is not yet ready to review your policy or
                provide you with a new quote. We are working hard to get our
                service up and running! We will send you an email once we are
                live!
              </p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <img
                src={Hero}
                className="w-[300px] h-[250px] xl:w-[400px] xl:h-[350px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px]  xl:gap-[50px] mt-[50px]">
            <div className=" h-[200px] xl:h-[250px] flex items-center  flex-1 max-w-[500px] border border-[#033F63] rounded-[8px]">
              <div className="flex-1 p-[20px] ">
                <img src={ShineSvg} className="w-[30px] h-[30px]" />
                <h3 className=" text-[#033F63] font-bold  text-[24px] xl:text-[32px] mb-[10px]">
                  Upload Your Existing Policy
                </h3>
                <p className="text-[#A2B1BF] font-light  text-[14px] xl:text-[16px]">
                  Drag & Drop your files here
                </p>
              </div>
              <div className="w-[110px] xl:w-[140px]  flex items-center justify-center">
                <img
                  src={UploadImage}
                  className="w-[100px] h-[112px] object-contain"
                />
              </div>
            </div>
            <div className=" h-[200px] xl:h-[250px] flex items-center  flex-1 max-w-[500px] border border-[#033F63] rounded-[8px]">
              <div className="flex-1 p-[20px]  ">
                <img src={UmbrellaImage} className="w-[30px] h-[30px]" />
                <h3 className=" text-[#033F63] font-bold  text-[24px] xl:text-[32px] mb-[10px]">
                  Select Your Preferred Insurance
                </h3>
                <p className="text-[#A2B1BF] font-light  text-[14px] xl:text-[16px]">
                  View available insurance types
                </p>
              </div>
              <div className="w-[110px] xl:w-[140px]  flex items-center justify-center">
                <img
                  src={InsuranceImage}
                  className="w-[100px] h-[112px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[110px] bg-white rounded-md self-start ml-[20px]">
          <div className="flex flex-col justify-center items-center h-[100px]">
            <img src={QuoteSvg} className="" />
            <span className="font-bold text-[16px] text-[#033F63]">Quotes</span>
          </div>
          <div className="flex flex-col justify-center items-center h-[100px]">
            <img src={PolicieSvg} className="" />
            <span className="font-bold text-[16px] text-[#033F63]">
              Policie
            </span>
          </div>
          <div className="flex flex-col justify-center items-center h-[100px]">
            <img src={MessageSvg} className="" />
            <span className="font-bold text-[16px] text-[#033F63]">
              Messages
            </span>
          </div>
          <div className="flex flex-col justify-center items-center h-[100px]">
            <img src={SupportSvg} className="" />
            <span className="font-bold text-[16px] text-[#033F63]">
              Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
