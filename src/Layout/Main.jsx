import { Outlet } from "react-router-dom";
import Footer from "../component/Shared/Footer/Footer";
import Navbar from "../component/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Toaster />

      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
