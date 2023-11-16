import { useQuery } from "@tanstack/react-query";
import OrderService from "../services/order-services";

const useCheckTokenAvailavleForUser = (userId, coupenName) => {
  return useQuery({
    queryKey: ["coupenAvailable", { userId, coupenName }],
    queryFn: () => OrderService.CheckCoupen(userId, coupenName),
  });
};

export { useCheckTokenAvailavleForUser };
