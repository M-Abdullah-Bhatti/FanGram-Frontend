import axios from "axios";
import apiUrl from "../utils/url";

class CelebrityService {

     /**
   * getAllCelebrities
   * @returns
   */
  async getAllCelebrities() {
    const {data} = await axios.get(`${apiUrl}/api/celebrity/getAllCelebrities`);
    return data
  }


    /**
   * getAllFeaturedCelebrities
   * @returns
   */
  async getAllFeaturedCelebrities() {
    const {data} = await axios.get(`${apiUrl}/api/celebrity/getAllFeaturedCelebrities`);
    return data?.data
  }



  
  
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new CelebrityService();
