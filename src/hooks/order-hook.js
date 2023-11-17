import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import OrderService from "../services/order-services";

const useCheckTokenAvailavleForUser = (userId, coupenName) => {
  return useQuery({
    queryKey: ["coupenAvailable", { userId, coupenName }],
    queryFn: () => OrderService.CheckCoupen(userId, coupenName),
  });
};

const useCouponAvailedByUser = (userId, coupenName) => {
  return useQuery({
    queryKey: ["coupenAvailed", { userId, coupenName }],
    queryFn: () => OrderService.CouponAvailed(userId, coupenName),
  });
};

const useAllMyOrders = (userId) => {
  return useQuery({
    queryKey: ["myOrders", { userId }],
    queryFn: () => OrderService.MyOrders(userId),
  });
};

const usePlaceOrder = (orderData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return OrderService.PlaceOrder(orderData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("placeorder");
      },
    }
  );
};

export {
  useCheckTokenAvailavleForUser,
  useCouponAvailedByUser,
  useAllMyOrders,
  usePlaceOrder,
};
