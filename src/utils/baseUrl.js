const environment = "dev";
let apiUrl;
if (environment === "production") {
  apiUrl = "https://calm-gray-haddock-sock.cyclic.app";
} else {
  apiUrl = "http://localhost:5000";
}


export default apiUrl