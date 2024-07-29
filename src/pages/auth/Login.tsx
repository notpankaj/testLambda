import { useNavigate } from "react-router-dom";
import AppleIcon from "../../assets/icons/apple.png";
import GoogleIcon from "../../assets/icons/google.png";
import { getCurrentUser, signIn } from "aws-amplify/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "../../components/Loader";
import { useAuth } from "../../context/AuthContext";
import { FaCheck } from "react-icons/fa";
const Login = () => {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await signIn({
        username: email,
        password: password,
      });
      console.log(res);
      if (res.nextStep.signInStep === "CONFIRM_SIGN_UP") {
        navigate("/verify-account", {
          state: { email: email },
        });
      }
      if (res.isSignedIn) {
        const userData = await getCurrentUser();
        if (userData.userId && userData.username) {
          setAuthUser({ userId: userData.userId, username: userData.username });
        }
        toast.success("Logged In!");
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className="text-white font-extrabold text-[64px]">Login</h1>
      <h6 className=" text-white text-[32px] font-medium">
        We are happy to have you back!
      </h6>

      <div className="flex flex-col gap-[20px] my-[20px]">
        <button className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-l outline-none"
            placeholder="Email"
          />
        </button>
        <button className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]">
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="text-l outline-none"
            placeholder="Password"
          />
        </button>
        <div className="flex items-center justify-between w-[300px] px-[5px]">
          <div className="flex gap-[5px] items-center">
            <div
              className="bg-white w-[10px] h-[10px] rounded-[2px] cursor-pointer flex items-center justify-center"
              onClick={() => {
                setIsCheck(!isCheck);
              }}
            >
              {isCheck ? <FaCheck className="text-[8px]" /> : null}
            </div>
            <span className="text-[16px] font-light text-white">
              Remember me
            </span>
          </div>
          <a href="#" className="text-[16px] font-light text-white">
            Forgot Password ?
          </a>
        </div>
        <button
          onClick={handleLogin}
          className=" w-[300px] h-[38px] rounded-[5px] bg-[#5D6E79] flex items-center justify-center"
        >
          {loading ? (
            <Loader />
          ) : (
            <span className=" text-white   font-semibold text-[16px]">
              Login
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
          onClick={() => navigate("/signup")}
          className="text-white  font-light text-center"
        >
          Don’t have an account? <b>Sign up</b>
        </span>
      </div>
    </div>
  );
};

export default Login;
