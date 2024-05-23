import { useNavigate, useParams } from "react-router-dom";
import edit from "../../../assets/edit.jpg";
import { useEffect, useState } from "react";
import useItems from "../../../Hooks/useItems";

const ItemUpdate = () => {
  // const { id } = useParams();
  const [items] = useItems();
  // const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [url, setUrl] = useState("");

  // setTitle(items?.title);
  // setDes(items?.description);
  // setPrice(items?.price);
  // setCondition(items?.condition);
  // setUrl(items?.url);

  useEffect(() => {
    if (items) {
      setTitle(items?.title);
      setDes(items?.description);
      setPrice(items?.price);
      setCondition(items?.condition);
      setUrl(items?.url);
    }
  }, [items]);

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
          className="absolute inset-0 bg-orange-400 opacity-50"
          style={{ backgroundColor: "rgba(184, 169, 129)" }}
        ></div>
        <div className="relative z-10">
          <h1 className="py-12 text-4xl font-bold text-center text-gray-900">
            Update Product Details
            <div className="w-36 h-1 bg-orange-500 mx-auto"></div>
          </h1>

          <div className="mx-auto">
            <form onSubmit="" className="mx-4 w-1/2 md:mx-auto py-6 md:py-16">
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
                    name="description"
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
                  className="bg-gray-400 w-full py-3 cursor-pointer rounded-lg font-bold"
                  type="submit"
                  value="Update Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemUpdate;
