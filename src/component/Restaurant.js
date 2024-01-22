import { useEffect, useState } from "react";
import { RESTAURANT_URL_POSTFIX, RESTAURANT_URL_PREFIX } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";

const Restaurant = () => {
    const { resId } = useParams();
    const [restDetails, setRestDetails] = useState(null);

    const fetchRestaurantData = async () => {
        const url = RESTAURANT_URL_PREFIX + resId + RESTAURANT_URL_POSTFIX;
        const data = await fetch(url);
        const jsonData = await data.json();
        setRestDetails(jsonData?.data?.cards);
    }

    useEffect(() => {
        fetchRestaurantData();
    }, []);


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
