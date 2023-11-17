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
   * {Array} categories - Array of categories to filter celebrities
   * @returns
   */
  async getCelebritiesByCategories(categories) {
    try {
      const { data } = await axios.post(`${apiUrl}/api/celebrity/getCelebritiesByCategories`, { categories });
      return data?.data;
    } catch (error) {
      console.error('Error fetching celebrities by categories:', error);
      throw error;
    }
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

  
  /**
   * Add to Favorite
   * @returns
   */
  async addFavorite(celebrityId, userId) {
    try {
      const response = await axios.put(`${apiUrl}/api/user/addFavorite/${celebrityId}`, { userId });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error adding/removing favorite');
    }
  }



  
  
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new CelebrityService();
