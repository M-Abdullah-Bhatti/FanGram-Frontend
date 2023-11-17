import axios from "axios";
import apiUrl from "../utils/url";

class FAQService {

     /**
   * getAllFAQs
   * @returns
   */
  async getAllFAQs() {
    const {data} = await axios.get(`${apiUrl}/api/faqs`);
    return data?.data
  }


}


// eslint-disable-next-line import/no-anonymous-default-export
export default new FAQService();
