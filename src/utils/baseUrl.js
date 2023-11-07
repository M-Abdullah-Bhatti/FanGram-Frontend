const environment = "dev";
let apiUrl;
if (environment === "production") {
  apiUrl = "";
} else {
  apiUrl = "http://localhost:5000";
}


export default apiUrl