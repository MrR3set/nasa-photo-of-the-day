import React from "react";


const imgcard = props =>{
    
    return (
        <div className="card">
            <div className="card-img-wrapper">
                {<a href={props.url} target="_blank" rel="noopener noreferrer"><img alt="Post" className="card-img" src={props.url}/></a>}
            </div>
            <div className="card-info">
                <div className="title">{props.title}</div>
                <div className="date">{props.date}</div>
                <div className="explanation">{props.explanation}</div>
            </div>

        </div>
    );
}

export default imgcard;
