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
      <Companies />
    </div>
  );
};

export default Home;
