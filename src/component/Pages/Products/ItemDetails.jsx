import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  console.log(item);

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/list/${id}`);
        setItem(res?.data);
        console.log(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleItem();
  }, [id]);

  return (
    <div>
      <h1 className="py-24 text-4xl font-bold text-center bg-gray-400/50">
        Product Details
      </h1>
      <div className="max-w-[1200px] mx-auto">
        <div className="block md:flex justify-between items-center">
          <div className="p-12 w-1/2">
            <img className="h-[500px] w-[500px]" src={item?.image} alt="" />
          </div>
          <div className="w-1/2 text-start">
            <h1 className="text-3xl font-bold">{item?.title}</h1>
            <div className="flex my-3 text-yellow-500">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaRegStarHalfStroke />
              </span>
            </div>
            <p className="text-gray-600  my-6">{item?.description}</p>
            <h4>Category: </h4>
            <h4>
              Condition:{" "}
              <span className="text-yellow-600 uppercase">
                {item?.condition}
              </span>
            </h4>
            <h3 className="text-3xl font-bold my-6 text-orange-500">
              ${item.price}
            </h3>
            <div className="flex justify-around">
              <button className="hover:text-orange-400 text-gray-600 flex items-center font-bold">
                {" "}
                <span className="mr-3 text-xl">
                  <FaRegHeart />
                </span>{" "}
                Add to Wishlist
              </button>
              <button className="bg-gray-800 text-white py-4 px-5 flex items-center font-bold">
                {" "}
                <span className="mr-3 text-xl">
                  <RiShoppingCartLine />
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
