import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import load from "../../../assets/loading.gif";
import { LiaEdit } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  //   console.log(item.user.id);
  const userId = localStorage.getItem("userId");
  //   console.log(userId);
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/list/${id}`, {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        });
        setItem(res?.data);
        console.log(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getSingleItem();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/list/${item?.id}`, {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      });
      navigate("/shop");
      toast.success("Delete Success");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div>
      <h1 className="py-24 text-4xl font-bold text-center bg-gray-400/50">
        Product Details
      </h1>

      {loading ? (
        <>
          <div className="my-12">
            <img className="mx-auto w-36 h-36" src={load} alt="" />
          </div>
        </>
      ) : (
        <>
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
                <p className="text-gray-600  my-3">
                  Seller: {item?.user?.username}
                </p>
                <h4>Category: </h4>
                <h4>
                  Condition:{" "}
                  <span className="text-yellow-600 uppercase">
                    {item?.condition}
                  </span>
                </h4>
                <h3 className="text-3xl font-bold my-6 text-orange-500">
                  ${item?.price}
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
            {item?.user?.id == userId ? (
              <>
                <div className="mb-12 flex justify-around">
                  <Link to={`/shop/${id}/update`}>
                    <button className="flex justify-center items-center px-4 py-3 bg-green-600 font-bold text-white">
                      <LiaEdit className="text-3xl mr-3" />
                      Update Product
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="flex justify-center items-center px-4 py-3 bg-red-600 font-bold text-white"
                  >
                    <AiOutlineDelete className="text-3xl mr-3" />
                    Delete Product
                  </button>
                </div>
              </>
            ) : (
              <>ami</>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetails;
