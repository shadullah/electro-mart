import { FaArrowRightLong } from "react-icons/fa6";
import "./GellaryList.css";

const GellaryList = () => {
  return (
    <div className="max-w-[1200px] mx-4 md:mx-auto my-16 ">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-template-columns-[1fr_2fr_1fr]"
        // style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
      >
        <div className="bg p-10 md:col-span-1">
          <h1 className="text-4xl whitespace-nowrap">
            Smart <span className="font-bold">Watch</span>
          </h1>
          <p className="pb-12 pt-2">0 Products</p>
          <div className="py-24"></div>
          <button className="flex items-center mt-6">
            Shop Now{" "}
            <span className="ml-3">
              <FaArrowRightLong />
            </span>{" "}
          </button>
        </div>

        <div className="col-span-1 grid grid-rows-2 gap-4 text-white">
          <div className="bg2 p-10 col-span-1">
            <h1 className="text-4xl">
              Quality <span className="font-bold">Keyboard</span>
            </h1>
            <p className="pb-12 pt-2">0 Products</p>
            <div className="px-24"></div>
            <button className="flex items-center mt-6">
              Shop Now{" "}
              <span className="ml-3">
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </div>
          <div className="bg3 p-10 col-span-1 text-end">
            <h1 className="text-4xl">
              Wireless <span className="font-bold">Headphone</span>
            </h1>
            <p className="pb-12 pt-2">0 Products</p>
            <div className="px-24"></div>
            <div className="ml-2 md:ml-96">
              <button className="flex items-center mt-6">
                Shop Now{" "}
                <span className="ml-3">
                  <FaArrowRightLong />
                </span>{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="bg4 p-10 col-span-1 text-white text-center">
          <h1 className="text-4xl whitespace-nowrap">
            Best <span className="font-bold">Speakers</span>
          </h1>
          <p className="pb-12 pt-2">0 Products</p>
          <div className="py-24"></div>
          <div className="mx-12">
            <button className="flex justify-center items-center mt-6">
              Shop Now{" "}
              <span className="ml-3">
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GellaryList;
