import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import './cardPage.css';

const cardpage = () =>{

   






    return (
        <div className="card-wrapper">
        {/* For each data on date thingy */}
            <Card url={"https://apod.nasa.gov/apod/image/2002/UGC12951_HubbleShatz_960.jpg"}/>
        </div>
    );
}

export default cardpage;




