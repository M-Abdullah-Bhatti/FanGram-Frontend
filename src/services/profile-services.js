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

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfileService();