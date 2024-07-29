import { useNavigate } from "react-router-dom";
import AppleIcon from "../../assets/icons/apple.png";
import GoogleIcon from "../../assets/icons/google.png";
import { signUp } from "aws-amplify/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "../../components/Loader";
import { FaCheck } from "react-icons/fa";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("password and confirm pasword is not matching!");
      return;
    }
    try {
      setLoading(true);
      const res = await signUp({
        password: password,
        username: email,
        options: {
          userAttributes: {
            email: email,
          },
          autoSignIn: true,
        },
      });
      if (res.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        navigate("/verify-account", {
          state: { email: email },
        });
      } else {
        toast.success("Register Successfully!");
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className="text-white font-extrabold text-[64px]">Registration</h1>
      <h6 className=" text-white text-[32px] font-medium">
        Sign up to get the best insurance quote for you!
      </h6>

      <div className="flex flex-col gap-[20px] my-[20px]">
        <button className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-l outline-none"
            placeholder="Email *"
          />
        </button>
        <button className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="text-l outline-none"
            placeholder="Password *"
          />
        </button>
        <button className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
          <input
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="text-l outline-none"
            placeholder="Confirm Password *"
          />
        </button>
        <div className="flex items-center justify-between ">
          <div className="flex gap-[5px] items-center">
            <div
              className="bg-white w-[10px] h-[10px] rounded-[2px] flex items-center justify-center"
              onClick={() => {
                setIsCheck(!isCheck);
              }}
            >
              {isCheck ? <FaCheck className="text-[8px]" /> : null}
            </div>
            <span className="text-[16px] font-light text-white">
              I agree to the <b> Terms of Service</b> and <b>Privacy Policy</b>
            </span>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className=" w-[300px] h-[38px] rounded-[5px] bg-[#5D6E79] flex justify-center items-center"
        >
          {loading ? (
            <Loader />
          ) : (
            <span className=" text-white   font-semibold text-[16px]">
              Register
            </span>
          )}
        </button>
        <button className=" w-[300px] h-[38px] rounded-[5px] bg-white  flex items-center justify-center gap-[15px]">
          <img className="w-[24px] h-[24px]" src={AppleIcon} />
          <span className=" text-black  text-[16px]">Sign In with Apple</span>
        </button>
        <button className=" w-[300px] h-[38px] rounded-[5px] bg-white flex items-center justify-center gap-[15px]">
          <img className="w-[24px] h-[24px]" src={GoogleIcon} />
          <span className=" text-black  text-[16px]">Sign In with Google</span>
        </button>
      </div>

      <div className="mt-[20px] w-[300px] flex justify-center items-center ">
        <span
          onClick={() => navigate("/login")}
          className="text-white  font-light text-center"
        >
          Alreay have an account? <b>Login up</b>
        </span>
      </div>
    </div>
  );
};

export default Register;
