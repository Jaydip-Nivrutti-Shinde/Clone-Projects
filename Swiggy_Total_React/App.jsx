import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import GrowCeryOption from "./Components/grocery";
import FoodOption from "./Components/foodoption";
import RestOption from "./Components/restaurents";
import CitiesOptions from "./Components/foodcities";
import GrovcerCityOption from "./Components/grocerycity";

function APP(){

    return(
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GrowCeryOption></GrowCeryOption>
            <RestOption></RestOption>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
            <CitiesOptions></CitiesOptions>
            <GrovcerCityOption></GrovcerCityOption>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<APP/>);