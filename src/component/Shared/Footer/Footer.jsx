import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="block md:flex justify-between py-12 text-gray-400">
            <div>
              <h1 className="text-4xl font-semibold my-4 text-white">
                <span className="text-orange-600">Electro</span> Mart
              </h1>
              <p>
                <div className="flex items-center">
                  <CiMail className="mr-2" />
                  <p>help@electro-mail.com</p>
                </div>
              </p>
              <address>Address: Mohakhali DOHS, Mohakhali , Dhaka-1218</address>
            </div>
            <div>
              <h1 className="text-2xl font-semibold my-4 text-white">Links</h1>
              <ul>
                <li className="text-xl hover:text-orange-600">
                  <Link>Home</Link>
                </li>
                <li className="text-xl hover:text-orange-600">
                  <Link>Shop</Link>
                </li>
                <li className="text-xl hover:text-orange-600">
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="my-4 text-2xl font-semibold text-white">
                Follow Us
              </h6>
              <div className="flex text-xl space-x-3 ">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="py-3 text-white">
            <p className="text-center">
              &copy;{" "}
              <span className="font-semibold">
                <span className="text-orange-600">Electro</span> Mart
              </span>{" "}
              <span>{new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
