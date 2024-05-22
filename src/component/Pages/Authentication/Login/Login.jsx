import { Link, useNavigate } from "react-router-dom";
import login from "../../../../assets/Authentixate/login.avif";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // const location = useLocation();

  // const from = location.state?.form?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(username, password);
    try {
      const response = await axios.post(
        "http://localhost:8000/account/login/",
        {
          email: email,
          password: password,
        }
      );
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user_id);

        // navigate(from, { replace: true });
        navigate("/");
        toast.success("Logged In successfully", { duration: 6000 });
        console.log("Login successful", response.data);
      } else {
        navigate("/login");
        toast.error(response.data, { duration: 6000 });
        console.error("No token returned from API");
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? JSON.stringify(error.response.data)
          : "Login information is not correct";
      setError(errorMessage);
      toast.error(errorMessage, { duration: 6000 });
      console.error(
        "Login failed",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <div>
      <div className="pt-6 pb-12 flex justify-between items-center">
        <div>
          <img className="animate-slowMove" src={login} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-sm text-nowrap md:text-xl font-bold ml-6 md:ml-16 text-violet-600">
            Welcom To Electro-mart
          </h1>

          <h1 className="text-2xl md:text-3xl text-gray-700 font-bold ml-6 md:ml-16 mt-6 md:mt-12">
            LOGIN
          </h1>
          <p className="text-xs md:text-sm text-nowrap text-gray-700 font-bold ml-6 md:ml-16">
            Electro-mart wants you to be Login
          </p>

          <form onSubmit={handleLogin} className="mx-4 md:mx-14 py-6 md:py-16">
            <div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-violet-600 text-xs font-bold mb-2">
                  email
                </label>
                <input
                  className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700 "
                  name="email"
                  type="text"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-violet-500 text-xs font-bold mb-2">
                  password
                </label>
                <input
                  className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700"
                  name="password"
                  type="password"
                  placeholder="*******"
                  required
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <input
                className="bg-violet-400 w-full py-3 cursor-pointer rounded-lg font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          {error && <div className="mt-4 text-red-600">{error}</div>}

          <p className="ml-16">
            New Here?{" "}
            <Link to="/signup" className="underline">
              Signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
