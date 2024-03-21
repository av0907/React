import Restaurant_card from "./Restaurant_card";
import {resObj} from "../utils/mockData";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { WHATSONYOURMINDITEMS_URL } from "../utils/constants";

const Body = () => {

    let [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [filteredrestaurants, setFilteredRestaurants]=useState([]);
    const [whatsOnYourMindItems, setWhatsOnYourMindItems]=useState([])
    let [text, setText]=useState("")
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_API_URL);

        const json = await data.json();
       //console.log(json)
       // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setWhatsOnYourMindItems(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
    };
    const listOfRestaurants_duplicate=listOfRestaurants;
    if(listOfRestaurants.length===0)
    {
        return <Shimmer />
    }

    //console.log(whatsOnYourMindItems)
    return(
        <div className="bg-gray-100">

            <div className="flex flex-row h-44 w-5/6 mx-36 overflow-x-hidden">

                { whatsOnYourMindItems.map((item)=>
                    <div key={item?.id} className="flex-shrink-0 w-32 h-32 m-2 rounded-full">
                    
                    <Link to={"/"+ item.action.text}> <img className="rounded-full hover:scale-[98%]" src={WHATSONYOURMINDITEMS_URL+item?.imageId}/></Link>

                    </div>
                ) }
                
                

            </div>

            <div className="m-2"> 

                <input type="text" className=" m-2 border-2 radius rounded-md" value={text} onChange={(e)=>{setText(e.target.value);}}/>
                
                <button className="border-0 m-2 px-2 rounded-sm bg-emerald-200 drop-shadow-md" onClick={()=>{
                    const search_list= listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(text.toLowerCase()));
                    console.log(search_list);
                    setFilteredRestaurants(search_list);
                    }}>Search</button>

                <button className="border-1 m-2 px-2 rounded-sm bg-emerald-200 drop-shadow-md" onClick={()=> {filtered_list=listOfRestaurants.filter((res)=> res.info.avgRating  > 4.0 );
                                                                    setFilteredRestaurants(filtered_list);}}>Top Rated</button>
            
            </div>

            <div className="flex flex-wrap mx-48 items-center">
                
                {filteredrestaurants.map((restaurant)=>  <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> <Restaurant_card resData={restaurant}/> </Link> )}
                
            </div>
        </div>
    )
}

export default Body;