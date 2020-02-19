import React from "react";

const imgcardInfo = props =>{
    return (
        <div className="card-info">

        {/* Print data */}
    <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
    <div className="explanation">{props.explanation}</div>
        </div>
    );
}


export default imgcardInfo;




