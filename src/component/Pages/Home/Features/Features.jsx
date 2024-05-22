import { BsTruck } from "react-icons/bs";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Features = () => {
  return (
    <div className="mt-24 my-12 border-2 border-gray-200 max-w-[1200px] mx-auto">
      <div className="block md:flex justify-between items-center px-12 py-12">
        <div className="flex items-center">
          <span className="text-5xl mr-5">
            <BsTruck />
          </span>
          <div>
            <h5 className="uppercase font-bold text-xl">Free shipping</h5>
            <p className="text-md text-gray-600">
              Free shipping on orders over $99
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-5xl mr-5">
            <TfiHeadphoneAlt />
          </span>
          <div>
            <h5 className="uppercase font-bold text-xl">24/7 support</h5>
            <p className="text-md text-gray-600">
              Instant access to perfect support
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-5xl mr-5">
            <RiExchangeDollarLine />
          </span>
          <div>
            <h5 className="uppercase font-bold text-xl">100% return</h5>
            <p className="text-md text-gray-600">We ensure secure payment!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
