import axios from "axios";
import apiUrl from "../utils/url";

class ProfileService {

    /**
  * getAllCelebrities
  * @returns
  */
 async updateUserData(user) {
    const res = await axios.put(
        `${apiUrl}/api/user/update`,
        { user },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
    return res;
}

 /**
  * get favorite celebrities
  * @returns
  */

async getFavoriteCelebrities(userId) {
  const { data } = await axios.get(`${apiUrl}/api/user/favoriteCelebrities/${userId}`);
  return data?.data;
}

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfileService();