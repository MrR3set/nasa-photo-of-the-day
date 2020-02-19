import React from "react";
import CardInfo from "./CardInfo";

const imgcard = props =>{
console.log(props)
    return (
        <div className="card">
        <div className="card-img-wrapper">
            {<a href={props.url} target="_blank"><img alt="Post" className="card-img" src={props.url}/></a>}
        </div>
        <CardInfo/>
        </div>
    );
}


export default imgcard;
