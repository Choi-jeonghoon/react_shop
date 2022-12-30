import mockData from "../dev/mockData";
import Product from "../types/product";

export const getProductList = async () => {
  const res = mockData.map((data) => {
    const { title, description, imgUrl, price } = data;
    const rtnObj = new Product(title, description, imgUrl, price);
    return rtnObj;
  });
  return res;
};

/**
 * Array.forEach [1, 2, 3].forEach((item, index) => {}) // no return
 * Array.map [1, 2, 3].map((item, index) => item)
 */
