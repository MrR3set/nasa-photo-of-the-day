import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import './cardPage.css';

export default function CardPage(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [exp, setExp] = useState();
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
     axios.get("https://api.nasa.gov/planetary/apod?api_key=90mkLguspGriqE2rbXROIh9359bWWebFpXsofdeH#").then(response=>{
        setUrl(response.data.url)
        setTitle(response.data.title)
        setDate(response.data.date)
        setExp(response.data.explanation)
    }).catch(error => {
        console.log(error);
    })
   },[])


    return (
        <div className="card-wrapper">
        {/* For each data on date thingy */
     
        }
            <Card url={url} title={title} date={date} explanation={exp}/>
        </div>
    );
}






