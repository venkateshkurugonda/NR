import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {

  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, deliveryTime } = resData?.data;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-img" />
      <h1 className="res-name">{name}</h1>
      <h2>{cuisines.join(',')}</h2>
      <h3>{"Rs " + costForTwo / 100 + " for Two"}</h3>
      <h3>{avgRating + " stars"}</h3>
      <h3>{deliveryTime + " mins"}</h3>
    </div>
  )
}

export default ResCard;