import axios from "axios";

const search = axios.create({
  baseURL: "https://api.nutritionix.com/v1_1/search/",
  headers: {
    "x-app-id": "781bf2ab",
    "x-app-key": "d244a9cb0b9bfd1879dcc79d3a71e034"
  }
});
export default search;
