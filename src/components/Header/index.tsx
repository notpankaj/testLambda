import { useMatches, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useMatches()[0];
  const isCommercialRoute = pathname === "/commercial";
  return (
    <div className="flex justify-end  mx-[20px] pt-[20px] mb-[5px]">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className={`${
          !isCommercialRoute ? "bg-[#033F63] " : "bg-[#FFFFFF]"
        }  mr-[20px] w-[120px] h-[40px] rounded-[4px] `}
      >
        <span
          className={`${
            !isCommercialRoute ? "text-white" : "text-[#033F63]"
          } text-[16px]`}
        >
          Individual
        </span>
      </button>

      <button
        onClick={() => {
          navigate("/commercial");
        }}
        className={`${
          isCommercialRoute ? "bg-[#033F63] " : "bg-[#FFFFFF]"
        } mr-[20px] w-[120px] h-[40px] rounded-[4px]`}
      >
        <span
          className={`${
            isCommercialRoute ? "text-white" : "text-[#033F63]"
          } text-[16px]`}
        >
          Commercial
        </span>
      </button>
    </div>
  );
};

export default Header;
