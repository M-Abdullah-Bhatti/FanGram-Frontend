import {   useQuery  } from "@tanstack/react-query";
import FAQService from "../services/faq-services";

const useGetAllFAQs = () => {

    return useQuery({  queryKey: ['faqs'],  queryFn: () => FAQService.getAllFAQs()
  })
};



export {
  useGetAllFAQs,
 
};
