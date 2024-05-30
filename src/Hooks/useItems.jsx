import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const urls = [
    "https://work-notes-server.onrender.com/todo/list/",
    "http://127.0.0.1:8000/list/",
  ];

  useEffect(() => {
    const getItems = async () => {
      for (const url of urls) {
        try {
          const res = await axios.get(url, {
            // headers: {
            //   Authorization: `token ${localStorage.getItem("token")}`,
            // },
          });
          setItems(res.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    getItems();
  }, [urls]);

  return [items, loading];
};

export default useItems;
