import { getProductList } from "../apis/productService";
import { useState, useEffect } from "react";

function useData() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getProductList();
      setMockData(res);
    })();
  });

  return {
    mockData,
  };
}

export default useData;
