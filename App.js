import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Basic from "./Component/Basic";
import { RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";
import  About from "./Component/About";
import Error from "./Component/Error";
import Contact from "./Component/Contact";
import Menus from "./Component/Menus";

const AppLayout=()=>{
    return (
    <div className="App">

      <Header/>
      <Outlet/>
    </div>)
};

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resTaurant/:resid",
                element:<Menus/>,
            }
        ],
            errorElement:<Error/>,
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
