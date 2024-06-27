import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");
  const [usersSingle, setUsersSignle] = useState([]);
  const urls = [
    `https://electro-mart-backend.onrender.com/account/user_list/${userId}/`,
    `https://electro-mart-backend.up.railway.app/account/user_list/${userId}/`,
    `http://127.0.0.1:8000/account/user_list/${userId}/`,
  ];

  useEffect(() => {
    const getUsers = async () => {
      for (const url of urls) {
        try {
          const res = await axios.get(url, {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          });

          setUsersSignle(res.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    getUsers();
  }, [userId]);

  return [usersSingle, loading];
};

export default useUsers;
