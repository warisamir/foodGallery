import React from 'react'
import ResturantCard from './ResturantCard'
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterResturant,setFilterResturant]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const [isLoadingMore, setIsLoadingMore] = useState(false);
 useEffect(()=>{
  fetchData();
 },[]);


 
const fetchData = async () => {
  try {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await response.json();
    console.log(json)
    setlistOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilterResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};




const fetchNextPage = async () => {
  setIsLoadingMore(true);
  try {
    const nextPageUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${currentPage + 1}`;
    const response = await fetch(nextPageUrl);
    const jsonData = await response.json();
    
    const newRestaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    setlistOfRes(prevState => [...prevState, ...newRestaurants]);
    setFilterResturant(prevState => [...prevState, ...newRestaurants]);
    setCurrentPage(prevPage => prevPage + 1);
  } catch (error) {
    console.error("Error fetching next page:", error);
  } finally {
    setIsLoadingMore(false);
  }
};

const handleLoadMore = () => {
  fetchNextPage();
};

// const handleSearch = () => {
//   const cuisine = listOfRes.filter(res => {
//     let valuetobe = '';
//    if (Array.isArray(res.info.cuisines)) {
//       valuetobe = res.info.cuisines.join(', ').toLowerCase();
//     } else {
//       return false; // Return false if cuisines is not a string or an array
//     }
//     const searchval = searchInput.toLowerCase();
//     return valuetobe.includes(searchval);
//   });
//   setFilterResturant(cuisine);
// }
const handleSearch=()=>{
  const filterRes=listOfRes.filter((res)=>{
    let value;
      value=res.info.name.toLowerCase();
    const searchValue=searchInput.toLowerCase();
    return value.includes(searchValue);
  })
  setFilterResturant(filterRes);
}

const handleInput=(e)=>{
    setSearchInput(e.target.value);
  }

const handleTopRatedFilter = () => {
  const topRated = listOfRes.filter(res => res.info.avgRating > 4.0);
  setlistOfRes(topRated);
};

if(listOfRes.length===0) {
return (<Shimmer/>)
}

return  (
    <div className="body">
      <div className="filter">
      <button className="filter-btn" onClick={handleTopRatedFilter}>Top Rated Restaurants</button>
        <input type="text" id="search" value={searchInput} onChange={handleInput} />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="res-container">
       {filterResturant.map((restaurant) => (
         <ResturantCard key={restaurant.info.id} resData={restaurant} />
       ))}
       {isLoadingMore && <p>Loading more...</p>}
      {!isLoadingMore && (
        <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
      )}
      </div>
    </div>
  ) 
}


export default Body