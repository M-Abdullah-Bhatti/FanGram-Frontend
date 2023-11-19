import React, { useState } from "react";
import PopularDelivery from "./PopularDelivery";
import TringDhamaka from "./TringDhamaka";
import { categories } from "../../Data";

import HomeCTA from "./HomeCTA";
import { useGetCelebritiesByCategories } from "../../hooks/celebrity-hooks";

function PopularCategories() {
  const [selected, setSelected] = useState(0);
  const [category, setCategory] = useState(["Celebrities"]);

  const { data: celebritiesData } = useGetCelebritiesByCategories(category);

  console.log("celebritiesData::: ", celebritiesData);

  return (
    <div className="bg-black text-white px-8 md:px-16 py-4 md:py-12">
      <h2 className="font-semibold text-xl md:text-2xl mb-2">
        Popular Categories to explore
      </h2>
      <div className="flex md:flex-wrap overflow-x-scroll no-scrollbar md:overflow-hidden py-2 md:py-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="mr-2 md:mr-4 my-2 cursor-pointer px-4 py-2 rounded-3xl whitespace-nowrap"
            style={{
              backgroundColor: index === selected ? "#D42978" : "#292929",
            }}
            onClick={() => {
              console.log("selected: ", category);
              setCategory([]);
              let selected = category;
              setCategory([category]);
              setSelected(index);
            }}
          >
            {category}
          </div>
        ))}
      </div>
      <PopularDelivery celebritiesData={celebritiesData} />
      {/* <TringDhamaka /> */}

      <HomeCTA />
    </div>
  );
}

export default PopularCategories;
