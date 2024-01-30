import { CDN_URL } from "../utils/constants";
const Card = ({ restaurant }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, areaName } = restaurant?.info;
    return (
        <div className="bg-white mb-5 mr-[50] w-[250] hover:border-2 rounded-[10] border-white">
            {Number(restaurant.info.totalRatingsString.replace(/[^0-9]/g, "")) < 10 
            && <label className="absolute p-[10] bg-black/70 text-white rounded-tl-[10] rounded-br-[10]s">Promoted</label>}
            <img className="w-[250] h-[170] rounded-[10]" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="text-sm m-0 ml-[10] leading-6">{name}</h3>
            <h3 className="text-sm m-0 ml-[10] leading-6">{avgRating +"star"}</h3>
            <h3 className="text-sm m-0 ml-[10] leading-6">{cuisines.join(", ")}</h3>
            <h3 className="text-sm m-0 ml-[10] leading-6">{areaName}</h3>
        </div>)
}


// Higher Order Function 
// 
// export const isPromotedPresent = (Card)=>{
//     return (props)=>{
//         return (<>
//                     <label className="Label">Promoted</label>
//                     <Card {...props}/>
//                  </>)
//     }
// }

export default Card;