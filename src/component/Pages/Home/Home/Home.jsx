import Products from "../../Products/Products";
import Carousel from "../Carousel/Carousel";
import Companies from "../Companies/Companies";
import Features from "../Features/Features";
import GellaryList from "../GellaryList/GellaryList";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Features />
      <GellaryList />
      <Products isHome={true} />
      <Companies />
    </div>
  );
};

export default Home;
