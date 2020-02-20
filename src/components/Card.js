import React from "react";
import CardInfo from "./CardInfo";

const imgcard = props =>{
    
    return (
        <div className="card">
        <div className="card-img-wrapper">
            {<a href={props.url} target="_blank" rel="noopener noreferrer"><img alt="Post" className="card-img" src={props.url}/></a>}
        </div>
        <CardInfo title={props.title} date={props.date} explanation={props.explanation}/>
        </div>
    );
}

export default imgcard;
