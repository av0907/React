import { IMG_ITEM_URL } from "../utils/constants";

const MenuItemList = ({items}) =>{

    console.log(items);

    return(
        
        <div>
            {items.map((item)=> <div className="flex flex-row px-16 border-b-2 justify-between">
                                    <div className=" w-5/6 ">
                                        <div className="mt-8 text-lg font-semibold">{item?.card?.info?.name}</div>
                                        <div className="mb-2">₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</div>
                                        
                                    </div>

                                    <div className="relative flex mt-6 ml-8 mb-8 w-1/6 h-24 rounded-md overflow-hidden ">
                                        <img className="mt-2 rounded-md shadow-xl" src={IMG_ITEM_URL+item?.card?.info?.imageId} alt="Jar" />
                                        <button className="font-bold border-slate-300 items-center absolute border-2 p-1 bottom-0 px-2 left-5 text-xs rounded-lg bg-gray-200 text-emerald-600 opacity-90">Add to Cart</button>
                                    </div>
                
                                </div>)}
        </div>

    );
};

export default MenuItemList;