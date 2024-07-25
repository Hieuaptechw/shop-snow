import axios from "./axios";

const testProduct = () => {
  return axios.get(`product_details.php/1`);
};

const testLogin = () => {
  return axios.get(`login.php`);
};

export { testProduct, testLogin };