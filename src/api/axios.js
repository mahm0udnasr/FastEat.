import axios from "axios";
export default axios.create({
  baseURL: "https://themealdb.com/api/json/v1/1/",
});
