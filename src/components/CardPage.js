import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import './cardPage.css';


export default function CardPage(){

    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [exp, setExp] = useState();



    //date getter
    const [udate, setuDate] = useState("");
    useEffect(()=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        setuDate(yyyy + '-' + dd + '-' + mm);
    },[udate])


   useEffect(()=>{
     // eslint-disable-next-line no-useless-concat
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=90mkLguspGriqE2rbXROIh9359bWWebFpXsofdeH&date=${udate}`)
     .then(response=>{
        setUrl(response.data.hdurl)
        setTitle(response.data.title)
        setDate(response.data.date)
        setExp(response.data.explanation)
    }).catch(error => {
        console.log(error);
    })
   },[udate])

    return (
        <div className="cardPage">
            <div className="date picker">
                <form>
                    <label for="Date">Date</label>
                    <input type="date" name="Date" onChange={(event) =>setuDate(event.target.value)}/>
                </form>
            </div>
            <div className="card-wrapper">
                <Card url={url} title={title} date={date} explanation={exp}/>
            </div>
        </div>
       
    );
}






