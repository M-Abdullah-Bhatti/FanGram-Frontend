import {  useQueryClient, useMutation  } from "@tanstack/react-query";
import ProfileService from "../services/profile-services";

const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (userData) => {
            console.log(userData);
            return ProfileService.updateUserData(userData);
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("user");
          },
        }
    );
}

export { useUpdateUser };
