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
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <ul className="flex text-2xl">
              <li className="hover:text-orange-600 mr-3">
                <Link to="/login">
                  <GoPerson />
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
