import axios from "axios";
import apiUrl from "../utils/url";

class AuthService {
  /**
   *User Signup
   * @returns
   */

  async signUpUser(userData) {
    console.log("Hello");
    const res = await axios.post(`${apiUrl}/api/user/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  /**
   *User Login
   * @returns
   */

  async LoginUser(userData) {
    const res = await axios.post(`${apiUrl}/api/user/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
