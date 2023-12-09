import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestraMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  //since redID is different for different restaurants
  // console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL+resId);
      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Destructure with default values to handle undefined properties
  const {
    name = "",
    cuisines = [],
    avgRating = 0,
    costForTwoMessage = "",
  } = resInfo?.cards?.[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card || {};
  // console.log(itemCards);

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        Cuisine: {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>Average Rating: {avgRating}</p>
      <h2>Menu</h2>
      {itemCards?.map((item, index) => (
        <ul key={index}>
          <li>
            <h4>{item.card?.info?.name} - {item.card?.info?.price}</h4>
            <p>{item.card?.info?.description}</p>
          </li>
        </ul>
      ))}
    </div>
  );
  
};

export default RestraMenu;
