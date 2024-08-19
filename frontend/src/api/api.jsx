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
const ForgotPassword = (email)=>{
  return axios.post('password/email',{
    email
  })
}
const setPassword = (email,password,code)=>{
  return axios.post('password/reset',{
    email,
    password,
    code
  })
}
const AddToCart = (product_id,quantity,price,size,color,weight) => {
  return axios.post('cart/add', {
    product_id,
    quantity,
    price,
    size,
    color,
    weight,
  }); 
};
const DeleteToCart = (product_id,quantity,price,size,color,weight) => {
  return axios.post('cart/delete', {
    product_id,
    quantity,
    price,
    size,
    color,
    weight,
  }); 
};
const orderProduct=(shipping_address,notes,payment)=>{
  return axios.post('order/checkout',{
    shipping_address,
    notes,
    payment,
  });
}
const ReviewProduct =(product_id,rating,comment)=>{

  return axios.post('products_details/review/product',{
    product_id,
    rating,
    comment
  });
}
const getUserOrders = () => {
  return axios.get(`order/getorder`);
};
const Product_Details = () => {
  return axios.get(`product_details.php/1`);
};
const getCategory = () => {
  return axios.get(`category`);
};
const getSubcategory = (category_slug) => {
  return axios.get(`category/${category_slug}`);
};
const getProductReview =(product_id)=>{
  return axios.get(`products/${product_id}/reviews`);
}
const getProductReviewStats =(product_id)=>{
  return axios.get(`products/${product_id}/stats`);
}
const getProducts =()=>{
  return axios.get('category');
}
const getBrand = (category_slug) => {
  return axios.get(`brand/${category_slug}`);
};
const getProfile =()=>{
  return axios.get(`profile`);
}
const logout =()=>{
  return axios.get(`logout`);
}

const getNewProducts =()=>{
  return axios.get('new-products');
}
const getTopSelling =()=>{
  return axios.get('top-selling');
}

const getProductsCategory = (category_slug, subcategories = [], brands = [], minPrice = 0, maxPrice = 10000) => {
  const params = {};

  if (subcategories.length > 0) {
    params.subcategories = subcategories.join(',');
  }

  if (brands.length > 0) {
    params.brands = brands.join(',');
  }

  params.min_price = minPrice;
  params.max_price = maxPrice;

  return axios.get(`products/${category_slug}`, { params });
};

const getProductsCategoryDetails = (slug) => {
  return axios.get(`products/details/${slug}`);
};
const getProductsDetails = (id) => {
  return axios.get(`products_details/${id}`);
};
const getProductsCart =()=>{
  return axios.get('cart/product');
}

const getSearch = (query) => {
  return axios.get(`search/${query}`);
};
export default
 { Login ,Register,Product_Details, getCategory ,getProfile,
  logout,getSubcategory,getBrand,getProducts,getNewProducts,getTopSelling,getProductsCategory,
  getProductsDetails,getProductsCart,getSearch,ForgotPassword,setPassword,getProductsCategoryDetails,
  AddToCart,orderProduct,DeleteToCart,getUserOrders,ReviewProduct,getProductReview,getProductReviewStats
};