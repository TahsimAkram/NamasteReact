import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/about";
import ContactPage from "./component/ContactPage";
import Restaurant from "./component/Restaurant";
import LoginPage from "./component/LoginPage";



const SastaSwiggy = () => {
    return (<>
        <Header />
        <Outlet/>
    </>)
}

const routerConfig = createBrowserRouter([
    {
        path:"/",
        element:<SastaSwiggy/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactPage/>
            },
            {
                path:"/restaurant/:resId",
                element:<Restaurant/>
            },{
                path:"/login",
                element:<LoginPage/>
            }
        ]
    },
    

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);