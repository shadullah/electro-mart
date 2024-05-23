import { LiaEdit } from "react-icons/lia";
import useUsers from "../../../Hooks/useUsers";
import load from "../../../assets/loading.gif";

const Profile = () => {
  const [usersSingle, loading] = useUsers();
  return (
    <div>
      <h1 className="py-24 text-4xl font-bold text-center bg-gray-400/50">
        My Profile
      </h1>
      {loading ? (
        <>
          <div className="my-12">
            <img className="mx-auto w-36 h-36" src={load} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between my-12">
              <div className="w-1/2 border-2 p-6 m-6 mx-auto">
                <div className="mx-auto w-48 h-48 border-2">
                  <img
                    className=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_dWMGh2QNUxpbngwWGc3x-YZFadDiwI35pKf8U7-iA&s"
                    alt="#"
                  />
                </div>
                <div className="">
                  <div className="text-center">
                    <div className="text-green-600 font-extrabold my-3 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-800 mr-3"></div>
                      <h1 className="text-center py-2">Active Now</h1>
                    </div>
                    <h3>Username: {usersSingle.username}</h3>
                    <div>
                      <p>First Name: {usersSingle.first_name}</p>
                      <p>Last Name: {usersSingle.last_name}</p>
                    </div>
                    <p>email: {usersSingle.email}</p>
                  </div>
                  <div className="flex justify-center">
                    <button className="my-3 flex justify-center items-center px-4 py-3 bg-green-600 font-bold text-white">
                      <LiaEdit className="text-3xl mr-3" />
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
              {/* pasher div */}
              <div className="w-1/2"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
