import React from 'react'
import { CID_URL } from '../utils/Config';
import Menus from './Menus';

const ResturantCard = (props) => {
  const {resData}=props;
  const {cloudinaryImageId,
            name,costForTwo,
            cuisines,sla,avgRating }=resData?.info;
  return (
    <div className="ResturantCard" style={{backgroundColor:"#f0f0f0"}}
        onClick={()=><Menus/>}>
        <img className="res-logo" src={CID_URL+cloudinaryImageId} alt="Mahesh-babu"/>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ",) }</h5>
        <span>{sla?.slaString}</span>
        <span>{avgRating}✯ </span>
        <span> {costForTwo}</span>
    </div>
  )
}

export default ResturantCard