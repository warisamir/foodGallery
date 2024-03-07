import {useState,useEffect} from 'react'
import Shimmer from './Shimmer';

const Menus = () => {
    useEffect(()=>{
       fetchMenu();
    },[])
const [resinfo, setresinfo] = useState(null)
    const fetchMenu=async()=>{
        const response=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=608589&catalog_qa=undefined&submitAction=ENTER")
        const json=await response.json();
        setresinfo(json.data);
        
    }
        const {name,cuisines,cloudinaryImageId,costForTwo,}=resinfo?.cards[0]?.card?.card?.info||[];
        const {itemCards}=resinfo?.cards[2]?.groupedCard?.cardGroupMsg?.Regular?.cards[1]?.card?.card || [];
        resinfo===null?<Shimmer/>:
        (
        <div id="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}-{costForTwo}</p>
        <h3>Menu</h3>
        <ul>
            <li>{}</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
            </ul>
    </div>
  )
}

export default Menus