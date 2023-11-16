import axios from "axios";
import apiUrl from "../utils/url";

class OrderService {
  /**
   *Check user coupen
   * @returns
   */

  async CheckCoupen(userId, coupenName) {
    // console.log("Hello");
    const res = await axios.get(
      `${apiUrl}/api/coupen/coupenAvailable?userId=${userId}&coupenName=${coupenName}`,
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
export default new OrderService();
