const Selling = () => {
  return (
    <div>
      <h1 className="py-24 text-4xl font-bold text-center bg-gray-400/50">
        Add Product for Sale
      </h1>
      <form className="text-center my-12">
        <label>Product Image</label>
        <br />
        <input type="file" placeholder="" required />
        <br />
        <label>Heading</label>
        <br />
        <input type="text" placeholder="title" required />
        <br />
        <label>Decription</label>
        <br />
        <input type="text" placeholder="Write requiredDescription" />
        <br />
        <label>Condition</label>
        <br />
        <input type="text" placeholder="Condition" required />
        <br />
        <label>Price</label>
        <br />
        <input type="number" placeholder="$00" required />
        <br />
        <input
          type="button"
          value="Add Product"
          className="bg-yellow-400 w-48 py-3 my-3"
        />
      </form>
    </div>
  );
};

export default Selling;
