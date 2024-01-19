const Card = ({ restaurant }) => {
    const imageUrlPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const { cloudinaryImageId, name, cuisines, avgRating, areaName } = restaurant?.info;
    return (
        <div className="pamphlet">
            <img src={imageUrlPrefix + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
        </div>)
}

export default Card;