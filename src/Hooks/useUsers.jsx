import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const userId = localStorage.getItem("userId");
  const [usersSingle, setUsersSignle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/account/user_list/${userId}/`,
          {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          }
        );

        setUsersSignle(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [userId]);

  return [usersSingle, loading];
};

export default useUsers;
