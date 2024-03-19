import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import ProfileService from "../services/profile-services";

const useUpdateUser = (userData, id) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      return ProfileService.updateUserData(data.userData, data.id);
      // console.log("mutatttt", data, userIdObj);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("updateUser");
      },
    }
  );
};

const useGetFavoriteCelebrities = (userId) => {
  return useQuery({
    queryKey: ["getFavoriteCelebrities", userId],
    queryFn: () => ProfileService.getFavoriteCelebrities(userId),
    refetchOnWindowFocus: false,
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
