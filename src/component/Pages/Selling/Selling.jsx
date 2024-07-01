import axios from "axios";
import useUsers from "../../../Hooks/useUsers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Selling = () => {
  const navigate = useNavigate();
  const [users] = useUsers();
  const [category, setCat] = useState([]);
  const urls = [
    `https://electro-mart-backend.onrender.com/list/`,
    // `https://electro-mart-backend.up.railway.app/list/`,
    `http://localhost:8000/list/`,
  ];

  useEffect(() => {
    const categories = async () => {
      try {
        const res = await axios.get(
          "https://electro-mart-backend.onrender.com/category/"
        );
        setCat(res.data);
      } catch (err) {
        toast.error(err);
      }
    };
    categories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const title = e.target.title.value;
    const des = e.target.des.value;
    const price = e.target.price.value;
    const categorySelect = e.target.category.value;
    const condition = e.target.condition.value;

    const categoryObj = category.find(
      (cat) => cat.id == parseInt(categorySelect)
    );

    console.log(url, price, title, des, categoryObj, condition);

    for (const urlLink of urls) {
      try {
        await axios.post(
          urlLink,
          {
            user: users,
            title: title,
            description: des,
            price: price,
            condition: condition,
            category: categoryObj.slug,
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
            placeholder="Write required Description"
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
          {/* <div className="w-full px-3 mb-6"> */}
          <label>Category</label>
          <br />
          <select
            required
            // className="border-b-2 border-violet-500 py-2 px-3 text-gray-400 font-bold"
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            name="category"
            id="category"
          >
            <option className="text-base" value="" disabled>
              Set Priority here
            </option>

            {/* {priority.map((prio) => console.log(prio.id))} */}
            {category.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <br />
          {/* </div> */}
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
