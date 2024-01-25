import { useEffect, useState } from "react";
import { RESTAURANT_URL_POSTFIX, RESTAURANT_URL_PREFIX } from "../utils/constants";

const useRestaurantData = (resId)=>{
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

    return restDetails;
}

export default useRestaurantData;