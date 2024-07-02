import { useNavigate, useParams } from "react-router-dom";
import edit from "../../../assets/edit.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import load from "../../../assets/loading.gif";
import toast from "react-hot-toast";

const ItemUpdate = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCate] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get(
          `https://electro-mart-backend.onrender.com/list/${id}/`,
          {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          }
        );
        setTitle(res.data?.title);
        setDes(res.data?.description);
        setPrice(res.data?.price);
        setCondition(res.data?.condition);
        setSelectedCategory(res.data?.category);
        console.log(res.data?.category);
        setUrl(res.data?.image);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getItem();
  }, [id]);

  useEffect(() => {
    const categories = async () => {
      try {
        const res = await axios.get(
          "https://electro-mart-backend.onrender.com/category/"
        );
        setCate(res.data);
      } catch (err) {
        toast.error(err);
      }
    };
    categories();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.des.value;
    const price = e.target.price.value;
    const condition = e.target.condition.value;
    const categorySelect = e.target.category.value;
    const image = e.target.url.value;

    // const categoryObj = category.find(
    //   (cat) => cat.id == parseInt(categorySelect)
    // );

    console.log(url, description, title);

    try {
      await axios.put(
        `https://electro-mart-backend.onrender.com/list/${id}/`,
        {
          title: title,
          description: description,
          price: price,
          condition: condition,
          image: image,
          category: categorySelect,
        },
        {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate(`/shop/${id}`);
      toast.success("Updated successfully");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${edit})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ backgroundColor: "rgba(0, 0, 5)" }}
        ></div>
        <div className="relative z-10 text-white">
          <h1 className="py-12 text-4xl font-bold text-center">
            Update Product Details
            <div className="w-36 h-1 bg-orange-500 mx-auto"></div>
          </h1>

          {loading ? (
            <>
              <div className="my-12">
                <img className="mx-auto w-36 h-36" src={load} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto">
                <form
                  onSubmit={handleUpdate}
                  className="mx-4 w-1/2 md:mx-auto py-6 md:py-16"
                >
                  <div>
                    <div className="w-full px-3 mb-6">
                      <input
                        onChange={(e) => setUrl(e.target.value)}
                        className="appearance-none border-b-4 outline-none  border-gray-700 w-full py-2 px-3 bg-orange-300/10"
                        name="url"
                        placeholder="Image url here"
                        type="url"
                        value={url}
                        required
                      />
                    </div>
                    <div className="w-full px-3 mb-6">
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        className="appearance-none border-b-4 outline-none  border-gray-700 w-full py-2 px-3 bg-orange-300/10"
                        name="title"
                        placeholder="Title"
                        type="text"
                        value={title}
                        required
                      />
                    </div>

                    <div className="w-full px-3 mb-6">
                      <textarea
                        onChange={(e) => setDes(e.target.value)}
                        className="appearance-none border-b-4 outline-none  border-gray-700 w-full py-2 px-3 bg-orange-300/10"
                        name="des"
                        type="text"
                        value={des}
                        placeholder="Write Product description here..."
                        required
                      />
                    </div>
                    <div className="w-full px-3 mb-6">
                      <input
                        onChange={(e) => setCondition(e.target.value)}
                        className="appearance-none border-b-4 outline-none  border-gray-700 w-full py-2 px-3 bg-orange-300/10"
                        name="condition"
                        type="text"
                        value={condition}
                        placeholder="Write Product condition here..."
                        required
                      />
                    </div>
                    <div className="w-full px-3 mb-6">
                      <select
                        required
                        className="appearance-none border-b-4 outline-none  border-gray-700 w-full py-2 px-3 bg-orange-300/10"
                        name="category"
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option className="text-base" value="" disabled>
                          Set Priority here
                        </option>

                        {/* {priority.map((prio) => console.log(prio.id))} */}
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full px-3 mb-6">
                      <input
                        onChange={(e) => setPrice(e.target.value)}
                        className="appearance-none border-b-4 outline-none  border-gray-700 w-full py-2 px-3 bg-orange-300/10"
                        name="price"
                        type="number"
                        value={price}
                        placeholder="$00"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <input
                      className="bg-orange-400 w-full py-3 cursor-pointer rounded-lg font-bold"
                      type="submit"
                      value="Update Product"
                    />
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemUpdate;
