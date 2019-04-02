import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

class RestApi {
  // static url = "https://jsonplaceholder.typicode.com";

  static getListOfPosts() {
    return new Promise((resolve, reject) => {
      axios
        .get("/posts")
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
}

export default RestApi;
