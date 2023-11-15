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


  /**
   * getCelebritiesByCategories
   * @param {Array} categories - Array of categories to filter celebrities
   * @returns
   */
  async getCelebritiesByCategories(categories) {
    const { data } = await axios.post(`${apiUrl}/api/celebrity/getCelebritiesByCategories`, { categories });
    return data?.data;
  }

   /**
   * getAllFeaturedCelebrities
   * @returns
   */
  async getCelebrityDetails(id) {
    const {data} = await axios.get(`${apiUrl}/api/celebrity/details/${id}`);
    return data?.data
  }



   /**
   * getCelebrityVideo
   * @returns
   */
  async getCelebrityVideos(id) {
    const {data} = await axios.get(`${apiUrl}/api/video/celebrity/${id}`);
    return data?.data
  }



  
  
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new CelebrityService();
