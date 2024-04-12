// const environment = "dev";
const environment = "production";

let apiUrl;
if (environment === "production") {
  // apiUrl = "https://calm-gray-haddock-sock.cyclic.app";
  apiUrl = "https://fangram-backend.vercel.app";
} else {
  apiUrl = "http://localhost:5000";
}

export default apiUrl;
