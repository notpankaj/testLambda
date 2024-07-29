import { useLocation, useNavigate } from "react-router-dom";
import HeroSvg from "../../assets/svg/hero.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import { confirmSignUp } from "aws-amplify/auth";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const VerifyAccountPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignUpConfirmation = async () => {
    if (!code) return;
    try {
      setLoading(true);
      const { isSignUpComplete } = await confirmSignUp({
        username: state.email,
        confirmationCode: code,
      });
      if (isSignUpComplete) {
        toast.success("Account Verified!");
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] bg-[#F6F6F6] pt-[0px]">
      <Header />
      <NavBar />
      <section className="mx-[20px] flex flex-col bg-[#033F63] pb-[60px]  mt-[-5px] rounded-[5px] px-[30px] py-[20px] ">
        <div className="flex flex-1">
          <div className="w-[60%]">
            <div>
              <h1 className="text-white font-extrabold text-[64px]">
                Account Verify
              </h1>
              <h6 className=" text-white text-[32px] font-medium">
                Code sent to {state?.email}
              </h6>

              <div className="flex flex-col gap-[20px] my-[20px]">
                <button className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="CODE*"
                    className="outline-none"
                  />
                </button>
              </div>
              <button
                onClick={handleSignUpConfirmation}
                className="w-[93px] h-[38px] rounded-[5px] bg-[#5D6E79] flex items-center justify-center"
              >
                {loading ? (
                  <Loader />
                ) : (
                  <span className=" text-white   font-semibold text-[16px]">
                    Verify
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <img className="" src={HeroSvg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyAccountPage;
