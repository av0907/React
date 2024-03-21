import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { RouterProvider,createBrowserRouter, Outlet} from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu"
import Errorpage from "./components/Errorpage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Biryani from "./components/Biryani";
import Pizzas from "./components/Pizzas";
import South_Indian from "./components/South_Indian";

/*const Ap=React.createElement("h1",{},"I am Aditya");*/

const App =() => {
    return (
        <div>
            <div>  <Header/> </div>
            <div> <Outlet/></div>
        </div>
    )
}




const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/Biryani",
                element:<Biryani/>
            },

            {
                path:"/Pizzas",
                element:<Pizzas/>
            },
            {
                path:"/South Indian",
                element:<South_Indian/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Errorpage/>
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);