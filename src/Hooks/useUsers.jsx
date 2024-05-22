import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const userId = localStorage.getItem("userId");
  const [usersSingle, setUsersSignle] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/account/user_list/${userId}/`
        );

        setUsersSignle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [userId]);

  return [usersSingle];
};

export default useUsers;
