import {  useQuery  } from "@tanstack/react-query";
import CelebrityService from "../services/celebrity-services";

const useGetAllCelebrities = () => {

    return useQuery({  queryKey: ['addNewCelebrity'],  queryFn: () => CelebrityService.getAllCelebrities()
  })
};


const useGetAllFeaturedCelebrities = () => {

    return useQuery({  queryKey: ['getAllFeaturedCelebrities'],  queryFn: () => CelebrityService.getAllFeaturedCelebrities()
  })
};



export {
  useGetAllCelebrities,
  useGetAllFeaturedCelebrities
 
};
