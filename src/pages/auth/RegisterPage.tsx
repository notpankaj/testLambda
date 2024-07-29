import HeroSvg from "../../assets/svg/hero.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Register from "./Register";
const RegisterPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#F6F6F6] pt-[0px]">
      <Header />
      <NavBar />
      <section className="mx-[20px] flex flex-col bg-[#033F63] pb-[60px]  mt-[-5px] rounded-[5px] px-[30px] py-[20px] ">
        <div className="flex flex-1">
          <div className="w-[60%]">
            <Register />
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <img className="" src={HeroSvg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
