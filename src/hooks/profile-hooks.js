import {  useQueryClient, useMutation, useQuery  } from "@tanstack/react-query";
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

const useGetFavoriteCelebrities = (userId) => {
  return useQuery({
    queryKey: ['getFavoriteCelebrities', userId],
    queryFn: () => ProfileService.getFavoriteCelebrities(userId),
  });
};

const useIsFavoriteCelebrity = (userId, celebrityId) => {
  const getFavoriteCelebritiesQuery = useGetFavoriteCelebrities(userId);

  return {
    isFavorite: getFavoriteCelebritiesQuery.isSuccess
      ? getFavoriteCelebritiesQuery.data.some((fav) => fav._id === celebrityId)
      : false,
    isLoading: getFavoriteCelebritiesQuery.isLoading,
    isError: getFavoriteCelebritiesQuery.isError,
  };
};

export { useUpdateUser, useGetFavoriteCelebrities, useIsFavoriteCelebrity };
