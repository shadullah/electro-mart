import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const urls = [
    "https://electro-mart-backend.onrender.com/list/",
    // "https://electro-mart-backend.up.railway.app/list/",
    // "http://127.0.0.1:8000/list/",
  ];

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      // let success = false;
      for (const url of urls) {
        try {
          const endpoint = search ? `${url}?search=${search}` : url;
          const res = await axios.get(endpoint, {
            // headers: {
            //   Authorization: `token ${localStorage.getItem("token")}`,
            // },
          });
          setItems(res.data);
          // success=true;
          // break;
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    getItems();
  }, [search]);

  // useEffect(() => {
  //   const handleSearch = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(
  //         `https://electro-mart-backend.onrender.com/list/?search=${search}`,
  //         {
  //           // headers: {
  //           //   Authorization: `token ${localStorage.getItem("token")}`,
  //           // },
  //         }
  //       );
  //       setItems(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   handleSearch(search);
  // }, [search]);

  return [items, setSearch, loading];
};

export default useItems;
