import axios from "axios";
import { useEffect, useState } from "react";
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
          <div>{item?.length}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
