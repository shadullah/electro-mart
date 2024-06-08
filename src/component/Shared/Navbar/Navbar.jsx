import { CiMail } from "react-icons/ci";
import {
  FaBars,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IoCartOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
// import useUsers from "../../../Hooks/useUsers";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  // const [usersSingle] = useUsers();
  // console.log(usersSingle);
  const [toggle, setToggle] = useState(false);
  const [usertoggle, setUserToggle] = useState(false);
  // const [close, setClose] = useState(true);
  const menu = useRef(null);
  const userMenu = useRef(null);

  const handleOutside = (e) => {
    if (
      menu.current &&
      !menu.current.contains(e.target) &&
      userMenu.current &&
      !userMenu.current.contains(e.target)
    ) {
      setToggle(false);
      setUserToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);

  // const closeToggle = () => {
  //   setToggle(false);
  //   setClose(true);
  // };

  // const closeUserMenu = () => {
  //   setUserToggle(false);
  //   setClose(true);
  // };

  useEffect(() => {
    if (toggle || usertoggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle, usertoggle]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/account/logout/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      if (res.status == 200) {
        console.log("Logout Success");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        toast.success("Logout Successfully");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="first-bar flex justify-between items-center my-3 text-gray-500 mx-2 md:0">
          <div className="flex items-center my-3">
            <CiMail className="md:mr-2" />
            <p className="text-sm md:text-md">help@electro-mail.com</p>
          </div>
          <div className="flex text-sm md:text-xl space-x-3 ">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <hr />

        <div className="flex justify-between items-center py-3 md:py-6">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setToggle(!toggle);
            }}
            className=" md:hidden ml-6"
          >
            <FaBars />
          </div>
          <div
            ref={menu}
            className={`w-72 md:w-[350px] absolute flex items-center md:static py-2 md:bg-white bg-slate-300 z-10
            ${
              toggle
                ? "top-0 h-screen px-3  ease-in-out transition-all duration-1000"
                : "-top-full  ease-in-out transition-all duration-1000"
            }
             `}
          >
            <p
              onClick={(e) => {
                e.stopPropagation();
                setToggle(false);
              }}
              className="text-3xl absolute top-0 my-6 mx-6 md:hidden"
            >
              <IoCloseCircleOutline />
            </p>
            <ul className="md:flex justify-center items-center font-bold md:text-[16px] p-3 md:p-0 text-2xl space-y-3 md:space-y-0 mx-auto">
              <li className="hover:text-orange-600 mr-3">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-orange-600 mr-3">
                <Link to="/shop">Shop</Link>
              </li>
              {localStorage.getItem("token") ? (
                <>
                  <li className="hover:text-orange-600 mr-3">
                    <Link to="/sell">Sell-Item</Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li className="hover:text-orange-600 mr-3">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-4xl font-semibold whitespace-nowrap">
                <span className="text-orange-600">Electro</span> Mart
              </h1>
            </Link>
          </div>
          <div className=" mr-6 md:mr-0">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setUserToggle(!usertoggle);
              }}
              className=" md:hidden"
            >
              <GoPerson title="Login" />
            </div>
            <div
              ref={userMenu}
              className={`w-72 absolute flex items-center md:static py-2 md:bg-white bg-slate-300 z-10
            ${
              usertoggle
                ? "top-0 right-0 h-screen px-3  ease-in-out transition-all duration-1000"
                : "-top-full  ease-in-out transition-all duration-1000"
            }
             `}
              // className={`my-3 absolute md:static md:opacity-100`}
            >
              <>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserToggle(false);
                  }}
                  className="text-3xl top-0 absolute my-6 mx-6 md:hidden"
                >
                  <IoCloseCircleOutline />
                </p>
              </>
              <ul className="block md:flex justify-center items-center font-bold md:text-2xl p-3 md:p-0 text-3xl space-y-3 md:space-y-0 mx-auto">
                {localStorage.getItem("token") ? (
                  <>
                    <li className="hover:text-orange-600 mr-3">
                      <Link to="/wishlist">
                        <FaHeart />
                      </Link>
                    </li>
                    <li className="hover:text-orange-600 mr-3 flex justify-center">
                      <Link to="/cart">
                        <IoCartOutline />
                      </Link>
                    </li>
                    <li className="hover:text-orange-600 mr-3 flex justify-center items-center">
                      {/* <p className="mx-3 font-light text-gray-600">
                      {usersSingle.username},
                    </p> */}
                      <Link to="/profile">
                        <CgProfile />
                      </Link>
                    </li>
                    <li className="hover:text-orange-600 mr-3 flex justify-center">
                      <button onClick={handleLogout}>
                        <MdLogout title="Logout" />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="hover:text-orange-600 mr-3 flex justify-center">
                      <Link to="/login">
                        <GoPerson title="Login" />
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
