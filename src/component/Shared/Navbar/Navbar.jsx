import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useUsers from "../../../Hooks/useUsers";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [usersSingle] = useUsers();
  console.log(usersSingle);

  const token = localStorage.getItem("token");
  console.log(token);

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

  // const handleLogout = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8000/account/logout/", {
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     if (res.status == 200) {
  //       console.log("logout successfull");
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("userId");
  //   navigate("/login");

  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="first-bar flex justify-between items-center my-3 text-gray-500">
          <div className="flex items-center">
            <CiMail className="mr-2" />
            <p>help@electro-mail.com</p>
          </div>
          <div className="flex text-xl space-x-3 ">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className="flex font-bold text-[16px]">
              <li className="hover:text-orange-600 mr-3">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-orange-600 mr-3">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-orange-600 mr-3">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">
              <span className="text-orange-600">Electro</span> Mart
            </h1>
          </div>
          <div className="my-3">
            <ul className="flex items-center text-2xl">
              {localStorage.getItem("token") ? (
                <>
                  <li className="hover:text-orange-600 mr-3">
                    <Link to="/wishlist">
                      <FaHeart />
                    </Link>
                  </li>
                  <li className="hover:text-orange-600 mr-3">
                    <Link to="/cart">
                      <IoCartOutline />
                    </Link>
                  </li>
                  <li className="hover:text-orange-600 mr-3 flex items-center">
                    <p className="mx-3 font-light text-gray-600">
                      {usersSingle.username},
                    </p>
                    <Link to="/profile">
                      <CgProfile />
                    </Link>
                  </li>
                  <li className="hover:text-orange-600 mr-3">
                    <button onClick={handleLogout}>
                      <MdLogout title="Logout" />
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:text-orange-600 mr-3">
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
    </>
  );
};

export default Navbar;
