import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";

const Restaurant = () => {
    const { resId } = useParams();
    const restDetails = useRestaurantData(resId);
    if (restDetails == null) {
        return <ShimmerUi />
    }
    const { name, costForTwoMessage, locality } = restDetails[0]?.card?.card?.info;
    const { itemCards } = restDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{locality}</h2>
            {itemCards ? (
                <>
                    <h2>Dishes</h2>
                    <ul>
                        {itemCards ? (itemCards.map(dish => {
                            return <li key={dish?.card?.info?.id}>{dish?.card?.info?.name + " - Rs. " + dish?.card?.info?.price / 100}</li>
                        })) :
                            <li>No Recommended Dishes</li>}
                    </ul>
                </>) : ""

            }

        </div>)
}

export default Restaurant;
