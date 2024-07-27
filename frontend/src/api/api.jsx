import axios from './axios'; 

const Login = (email, password) => {
  return axios.post('login', {
    email,
    password
  }); 
};
const Register = (name,email, password,phone,address) => {
  return axios.post('register', {
    name,
    email,
    password,
    phone,
    address,
  }); 
};
const Product_Details = () => {
  return axios.get(`product_details.php/1`);
};
const getCategory = () => {
  return axios.get(`category`);
};


export default { Login ,Register,Product_Details, getCategory };