import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getProductList } from "../apis/productService";

function useData() {
  const [mockData, setMockData] = useState([]);
  // const [page, setPage] = useState(1); //페이지
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getProductList();
      setMockData(res);
    })();
  });

  const handleDetailButtonClick = useCallback(
    (e, item) => {
      navigate("/detail", {
        state: item,
      });
    },
    [navigate]
  );

  return {
    mockData,
    handleDetailButtonClick,
  };
}

export default useData;
