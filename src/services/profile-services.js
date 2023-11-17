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
  try {
    const { data } = await axios.get(`${apiUrl}/api/user/favoriteCelebrities/${userId}`);
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching favorite celebrities');
  }
}

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfileService();