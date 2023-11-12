import { useQueryClient, useMutation } from "@tanstack/react-query";
import BusinessService from "../services/business-services";

const useSubmitPromotionForm = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return BusinessService.submitBusinessForm(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("submitForm");
      },
    }
  );
};

export { useSubmitPromotionForm };
