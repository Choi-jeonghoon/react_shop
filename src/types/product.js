import ErrorUtil from "../utils/errorUtil";

class Product {
  constructor(title, description, imgUrl, price) {
    ErrorUtil.typeCheck(title, "string");
    this.title = title;
    ErrorUtil.typeCheck(description, "string");
    this.description = description;
    ErrorUtil.typeCheck(imgUrl, "string");
    this.imgUrl = imgUrl;
    ErrorUtil.typeCheck(price, "number");
    this.price = price;
  }
}

Object.freeze(Product);
export default Product;
