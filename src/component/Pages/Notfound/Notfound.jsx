import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="my-12">
      <div className="flex justify-center my-12">
        <FaExclamationTriangle className="text-9xl" />
      </div>
      <div className="text-center">
        <h3 className="text-5xl mb-12 ">Page Not Found</h3>
        <p>
          <Link to="/" className="px-3 py-4 bg-orange-400 rounded-md font-bold">
            Go Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Notfound;
