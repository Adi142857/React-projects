import { useEffect, useState } from "react";

const useRestraList = () => {
  const [listdata, setListData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      let restaurants = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListData(restaurants || []);
      setFilteredRestaurant(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { listdata, filteredRestaurant };
};

export default useRestraList;