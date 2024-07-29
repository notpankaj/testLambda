import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShineSvg from "../../assets/svg/shine.svg";

const AuthOption = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<null | string>(null);
  const handleNavigate = (n: string) => {
    navigate(`/${n}`);
  };
  return (
    <div>
      <h1 className="text-white font-extrabold text-[64px]">Hey there!</h1>
      <h6 className=" text-white text-[32px] font-medium">
        Do you already have a Rizz account?
      </h6>

      <div className="flex flex-col gap-[20px] my-[20px]">
        <button
          onClick={() => setMode("login")}
          className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]"
        >
          <div className="border border-black rounded-full w-[20px] h-[20px] flex justify-center items-center">
            {mode === "login" && (
              <div className="w-[18px] h-[18px]  bg-[#FEDC97] rounded-full" />
            )}
          </div>
          <span>Yes</span>
        </button>
        <button
          onClick={() => setMode("signup")}
          className="bg-white h-[50px] w-[300px] rounded-[5px] flex items-center px-[20px] gap-[10px]"
        >
          <div className="border border-black rounded-full w-[20px] h-[20px] flex justify-center items-center">
            {mode === "signup" && (
              <div className="w-[18px] h-[18px]  bg-[#FEDC97] rounded-full" />
            )}
          </div>
          <span>No</span>
        </button>
      </div>
      <button
        className={`w-[93px] h-[38px] rounded-[5px] flex items-center justify-evenly ${
          mode ? "bg-[#FEDC97]" : "bg-[#5D6E79]"
        }`}
        onClick={() => {
          if (mode) {
            handleNavigate(mode);
          }
        }}
      >
        <span
          className={`font-semibold text-[16px] ${
            mode ? "text-[#033F63]" : "text-white"
          }`}
        >
          Next
        </span>
        {mode && <img src={ShineSvg} />}
      </button>
    </div>
  );
};

export default AuthOption;
