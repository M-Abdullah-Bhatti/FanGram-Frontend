import axios from "axios";
import apiUrl from "../utils/url";

class BusinessService {
  /**
   *Submit Promotion Form
   * @returns
   */

  async submitBusinessForm(data) {
    console.log("Hello");
    const res = await axios.post(
      `${apiUrl}/api/businessPromotion/submitForm`,
      data,
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
export default new BusinessService();
