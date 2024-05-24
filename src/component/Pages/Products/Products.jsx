import useItems from "../../../Hooks/useItems";
import ItemsSingle from "./ItemsSingle";
import load from "../../../assets/loading.gif";

const Products = () => {
  const [items, loading] = useItems();
  return (
    <div className="max-w-[1200px] mx-auto my-12">
      <h1 className="text-4xl">
        Our <span className="font-bold">Products</span>
      </h1>

      {loading ? (
        <>
          <div className="my-12">
            <img className="mx-auto w-36 h-36" src={load} alt="" />
          </div>
        </>
      ) : items?.length > 0 ? (
        <div className="grid grid-cols-4  gap-4 my-6">
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
