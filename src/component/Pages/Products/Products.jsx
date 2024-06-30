import useItems from "../../../Hooks/useItems";
import ItemsSingle from "./ItemsSingle";
import load from "../../../assets/loading.gif";

const Products = () => {
  const [items, setSearch, loading] = useItems();

  return (
    <div className="max-w-[1200px] mx-auto my-12">
      <div className="block md:flex items-center justify-between">
        <h1 className="text-4xl mx-6 md:mx-0">
          Our <span className="font-bold">Products</span>
        </h1>
        <div className="space-x-4 space-y-4 mx-4 md:mx-0">
          <button
            onClick={() => setSearch("Watch")}
            className="border-2 border-gray-400 px-3 py-2 font-semibold hover:text-orange-400 hover:border-orange-400 ease-in-out duration-200"
          >
            Watch
          </button>
          <button
            onClick={() => setSearch("Camera")}
            className="border-2 border-gray-400 px-3 py-2 font-semibold hover:text-orange-400 hover:border-orange-400 ease-in-out duration-200"
          >
            Camera
          </button>
          <button
            onClick={() => setSearch("Speaker")}
            className="border-2 border-gray-400 px-3 py-2 font-semibold hover:text-orange-400 hover:border-orange-400 ease-in-out duration-200"
          >
            Speaker
          </button>
          <button className="border-2 border-gray-400 px-3 py-2 font-semibold hover:text-orange-400 hover:border-orange-400 ease-in-out duration-200">
            Mouse
          </button>
        </div>
      </div>

      {loading ? (
        <>
          <div className="my-12">
            <img className="mx-auto w-36 h-36" src={load} alt="" />
          </div>
        </>
      ) : items?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-6 md:mx-0 my-6">
          {items.map((item) => (
            <ItemsSingle key={item?.id} item={item} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-center my-12 text-white bg-red-600 py-6">
            No Products Found Or Server could not be Loaded at this time
          </p>
        </>
      )}
    </div>
  );
};

export default Products;
