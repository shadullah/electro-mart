import axios from "axios";
import useUsers from "../../../Hooks/useUsers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Selling = () => {
  const navigate = useNavigate();
  const [users] = useUsers();
  const urls = [
    `https://electro-mart-backend.onrender.com/list/`,
    `https://electro-mart-backend.up.railway.app/list/`,
    `http://localhost:8000/list/`,
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const title = e.target.title.value;
    const des = e.target.des.value;
    const price = e.target.price.value;
    const condition = e.target.condition.value;

    console.log(url, price, title, des, condition);

    for (const url of urls) {
      try {
        await axios.post(
          url,
          {
            user: users,
            title: title,
            description: des,
            price: price,
            condition: condition,
            image: url,
          },
          {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          }
        );
        navigate("/shop");
        toast.success("Item added success");
      } catch (err) {
        toast.error("Failed to add");
        console.log(err);
      }
    }
  };

  return (
    <div>
      <h1 className="py-24 text-4xl font-bold text-center bg-gray-400/50">
        Add Product for Sale
      </h1>
      <div className="text-center">
        <form onSubmit={handleSubmit} className="my-12">
          <label>Product Image</label>
          <br />
          <input
            name="url"
            className="w-1/3 outline-none appearance-none border-2 border-gray-300 p-3 my-3"
            type="url"
            placeholder="Image url here"
            required
          />
          <br />
          <label>Heading</label>
          <br />
          <input
            name="title"
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="text"
            placeholder="title"
            required
          />
          <br />
          <label>Decription</label>
          <br />
          <input
            name="des"
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="text"
            placeholder="Write requiredDescription"
          />
          <br />
          <label>Condition</label>
          <br />
          <input
            name="condition"
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="text"
            placeholder="Condition"
            required
          />
          <br />
          <label>Price</label>
          <br />
          <input
            name="price"
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="number"
            placeholder="$00"
            required
          />
          <br />
          <input
            type="submit"
            value="Add Product"
            className="bg-gray-400 cursor-pointer w-1/3 py-3 my-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Selling;
