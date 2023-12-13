import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ res }) => {
    // Destructure res?.info directly
    const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } = res?.info || {};
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 text-sm md:text-lg">
        <img
          className="rounded-lg"
          alt="pavbhaji"
          src={cloudinaryImageId ? `${CDN_URL}/${cloudinaryImageId}`: " "}/>
        <h3 className="font-bold py-3 text-xl">{name}</h3>
        <h4 className="font-medium">{areaName}</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

//input - Restaurant Card=> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    //return a component
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg sm:text-sm">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;