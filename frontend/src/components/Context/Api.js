import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "./loader.css"

export const Contextdata = createContext();


function Api({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://e-shop-api-kmrr.onrender.com/getAllProducts")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => console.log(error.message));
  }, []);
  
  if (loading) {
    return <div className="loder_body">
      <span class="loader">Loading</span>
    </div>
  }

  return <Contextdata.Provider value={data}>{children}</Contextdata.Provider>;
}

export default Api;
