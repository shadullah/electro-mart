import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/list/", {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        });
        setItems(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  return [items, loading];
};

export default useItems;
