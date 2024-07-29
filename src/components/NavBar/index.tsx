import AppLogoSvg from "../../assets/svg/Logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "aws-amplify/auth";
import { useLayoutEffect, useRef, useState } from "react";
import Loader from "../Loader";
import "./index.css";

const NavBar = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut();
      setAuthUser(null);
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    const handler = () => {
      if (screenY < 200) {
        if (navItemsRef.current?.classList.contains("nav__flying")) {
          navItemsRef.current?.classList.remove("nav__flying");
        }
      }
      if (navItemsRef.current) {
        const { top } = navItemsRef.current.getBoundingClientRect();
        if (top < 15) {
          if (!navItemsRef.current.classList.contains("nav__flying")) {
            navItemsRef.current.classList.add("nav__flying");
          }
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav className="mx-[20px] flex p-[20px] pb-[5px] rounded-[5px] mt-[30px]  bg-[#033F63]  justify-between items-start  top-[10px] z-10">
      <img
        className="h-[30px] cursor-pointer"
        onClick={() => navigate("/")}
        src={AppLogoSvg}
      />
      <div
        className="flex gap-[20px] items-center nav__item_box "
        ref={navItemsRef}
      >
        <div className="flex gap-[20px]  h-[40px] items-center px-[20px] rounded-[5px]">
          <NavLink to={"/shop"}>
            <a href="#" className="text-[16px] hover:text-[#FEDC97] text-white">
              Shop
            </a>
          </NavLink>
          <NavLink to={"/policyreview"}>
            <a href="#" className="text-[16px] hover:text-[#FEDC97] text-white">
              Review Your Policy
            </a>
          </NavLink>
          <a href="#" className="text-[16px] hover:text-[#FEDC97] text-white">
            Resources
          </a>
        </div>

        {authUser?.userId ? (
          <button
            onClick={handleLogout}
            className="w-[74px] h-[38px] bg-[#FEDC97] rounded-[4px] flex justify-center items-center"
          >
            {loading ? (
              <Loader />
            ) : (
              <span className="text-[16px] text-[#033F63] ">Logout</span>
            )}
          </button>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="w-[74px] h-[38px] bg-[#FEDC97] rounded-[4px]  flex justify-center items-center"
          >
            <span className="text-[16px] text-[#033F63] ">Login</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
