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


const useGetCelebrityDetails = (id) => {

    return useQuery({  queryKey: ['details'],  queryFn: () => CelebrityService.getCelebrityDetails(id)
  })
};

const useGetCelebrityVideos = (id) => {

    return useQuery({  queryKey: ['video/celebrity'],  queryFn: () => CelebrityService.getCelebrityVideos(id)
  })
};




export {
  useGetAllCelebrities,
  useGetAllFeaturedCelebrities,
  useGetCelebrityDetails,
  useGetCelebrityVideos
 
};
