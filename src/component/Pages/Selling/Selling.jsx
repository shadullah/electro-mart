const Selling = () => {
  return (
    <div>
      <h1 className="py-24 text-4xl font-bold text-center bg-gray-400/50">
        Add Product for Sale
      </h1>
      <div className="text-center">
        <form className="my-12">
          <label>Product Image</label>
          <br />
          <input
            className="w-1/3 outline-none appearance-none border-2 border-gray-300 p-3 my-3"
            type="url"
            placeholder="Image url here"
            required
          />
          <br />
          <label>Heading</label>
          <br />
          <input
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="text"
            placeholder="title"
            required
          />
          <br />
          <label>Decription</label>
          <br />
          <input
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="text"
            placeholder="Write requiredDescription"
          />
          <br />
          <label>Condition</label>
          <br />
          <input
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="text"
            placeholder="Condition"
            required
          />
          <br />
          <label>Price</label>
          <br />
          <input
            className="w-1/3 outline-none border-2 border-gray-300 p-3 my-3"
            type="number"
            placeholder="$00"
            required
          />
          <br />
          <input
            type="button"
            value="Add Product"
            className="bg-gray-400 w-1/3 py-3 my-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Selling;
