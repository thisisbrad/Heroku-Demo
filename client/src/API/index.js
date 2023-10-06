import axios from "axios";
// const API = axios.create({
//   baseURL: "https://api.unsplash.com/search/photos",
// });

const API = Object.create(null);

API.fetchImages = async () => {
  const response = await axios.get("/api/v1/authors");
  console.log(response);
  return response.data;
};

export default API;
