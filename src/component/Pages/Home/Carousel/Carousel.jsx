import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Carousel.css";
import hdphn from "../../../../assets/earphone.png";
import camera from "../../../../assets/camera-1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Carousel = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <AutoplaySlider
        play={true}
        interval={5000}
        cancelOnInteraction={false}
        className="slider"
      >
        <div className="slider_content flex flex-col-reverse md:flex-row justify-between items-center mx-6 md:mx-0">
          <div className="py-16 md:py-0">
            <p className="uppercase text-md md:text-[17px] text-gray-500">
              find the headphone. Push through !
            </p>
            <h1 className="uppercase text-5xl md:text-[80px] font-extrabold text-gray-800">
              Big Sale
            </h1>
            <h3 className="text-2xl md:text-4xl mb-6">
              Get up to <span className="font-bold">50% OFF</span>
            </h3>
            <button className=" flex  items-center px-4 py-3 my-4 bg-gray-600 text-white">
              Shop Now{" "}
              <span className="ml-3">
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </div>
          <div>
            <img className="w-[450px] animate-slowMove" src={hdphn} alt="" />
          </div>
        </div>

        {/* 2nd slide */}

        <div className="slider_content flex flex-col-reverse md:flex-row justify-between items-center mx-6 md:mx-0">
          <div className="py-16 md:py-0">
            <img className="w-[450px] animate-slowMove" src={camera} alt="" />
          </div>
          <div>
            <p className="uppercase text-3xl md:text-5xl font-light text-gray-800">
              Professional
            </p>
            <h1 className="uppercase text-5xl md:text-[80px] font-extrabold text-gray-800">
              Cameras
            </h1>
            <h3 className="text-lg md:text-xl font-bold text-gray-600 mb-6">
              Deals and Promotions!
            </h3>
            <button className=" flex  items-center px-4 py-3 my-4 bg-gray-600 text-white">
              Shop Now{" "}
              <span className="ml-3">
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Carousel;
