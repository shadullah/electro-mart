import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ItemsSingle = ({ item }) => {
  // console.log(item);
  const [isHovered, setIsHovered] = useState(false);
  const { title, price, image } = item;

  return (
    <div>
      {/* try hover card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative card text-center">
          <Link to={`/shop/${item.id}`}>
            <img src={image} alt="" />{" "}
          </Link>
          <div
            className={`absolute top-0 right-0 mt-3 mr-3 space-y-2 text-3xl duration-700 ease-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="">
              <button className="hover:bg-orange-500  bg-white rounded-full w-12 h-12 duration-500 ease-in-out flex items-center justify-center text-gray-600 hover:text-white">
                <IoCartOutline className="" />
              </button>
              <br />
              <button className="hover:bg-orange-500 bg-white rounded-full w-12 h-12 duration-500 ease-in-out flex items-center justify-center text-gray-600 hover:text-white">
                <CiHeart className="" />
              </button>
            </div>
          </div>
          <div className="my-3">
            {/* <Link to={`/shop/${item.id}`}> */}
            <h1 className="text-sm">{title}</h1> {/* </Link> */}
            <p className="font-bold mt-2 text-2xl">${price}</p>
          </div>
        </div>
      </div>

      {/* try hover card */}
    </div>
  );
};

export default ItemsSingle;
