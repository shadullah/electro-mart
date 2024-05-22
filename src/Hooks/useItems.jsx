import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/list/");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);

  return [items];
};

export default useItems;
