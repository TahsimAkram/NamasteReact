import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import DishCategory from "./DishCategory";

const Restaurant = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { resId } = useParams();
    const restDetails = useRestaurantData(resId);

    const closeDropdown = ()=>{
        setSelectedIndex(null);
    }
    if (restDetails == null) {
        return <ShimmerUi />
    }
    const { name, costForTwoMessage, locality } = restDetails[0]?.card?.card?.info;
    const itemCategories = restDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(resCategory =>
        resCategory?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="w-3/6 my-0 mx-auto">
            <h1 className="text-center font-bold text-lg">{name}</h1>
            <h2 className="text-center font-medium">{costForTwoMessage}</h2>
            <h2 className="text-center">{locality}</h2>
            {itemCategories.map((category, index) => {
                return <DishCategory key={index} updateIndex={()=>setSelectedIndex(index)} closeIndex={closeDropdown} show={selectedIndex == index ? true : false} category={category} />
            })}
        </div>)
}

export default Restaurant;
