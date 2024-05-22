import useItems from "../../../Hooks/useItems";
import ItemsSingle from "./ItemsSingle";

const Products = () => {
  const [items] = useItems();
  return (
    <div className="max-w-[1200px] mx-auto my-12">
      <h1 className="text-4xl">
        Our <span className="font-bold">Products</span>
      </h1>
      {items.map((item) => (
        <ItemsSingle key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
