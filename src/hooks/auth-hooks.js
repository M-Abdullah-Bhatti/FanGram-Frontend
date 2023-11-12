import { useQueryClient, useMutation } from "@tanstack/react-query";
import AuthService from "../services/auth-services";

const useUserSignup = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.signUpUser(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("register");
      },
    }
  );
};

const useUserLogin = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.LoginUser(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("login");
      },
    }
  );
};



export {
  useUserSignup,
  useUserLogin,
 
};
