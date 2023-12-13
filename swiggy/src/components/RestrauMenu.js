import React from "react";
import useRestraMenu from "../utils/useRestraMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory.js"

const RestraMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestraMenu(resId);

  // Destructure with default values to handle undefined properties
  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  console.log(resInfo?.cards);

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {/* Categories accordian */}
      {categories.map((category,key) => (
        <ResCategory category={category?.card?.card} key={key}/> 
      ))}
    </div>
  );
};

export default RestraMenu;
