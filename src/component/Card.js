import { CDN_URL } from "../utils/constants";
const Card = ({ restaurant }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, areaName } = restaurant?.info;
    return (
        <div className="pamphlet">
            <img src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{avgRating +"star"}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
        </div>)
}

export default Card;