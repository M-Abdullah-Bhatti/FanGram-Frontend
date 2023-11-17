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

  /**
   * user coupen applied
   * @returns
   */

  async CouponAvailed(userId, coupenName) {
    // console.log("Hello");
    const res = await axios.get(
      `${apiUrl}/api/coupen/coupenAvailed?userId=${userId}&coupenNames=${coupenName}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  }

  /**
   *Order Placed
   * @returns
   */

  async PlaceOrder(orderData) {
    // console.log("Hello");
    const res = await axios.post(`${apiUrl}/api/order/postOrder`, orderData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  /**
   *Get My Orders
   * @returns
   */

  async MyOrders(userId) {
    // console.log("Hello");
    const res = await axios.get(
      `${apiUrl}/api/order/allMyOrders?userId=${userId}`,
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
