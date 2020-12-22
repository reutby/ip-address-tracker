import React from "react";

const ResultItem =(props)=>{

    return(
        <div className="result-item" id={props.title === 'isp'? "last-item" : null}>
            <p>{props.title}</p>
            <h2>{props.content}</h2>
        </div>
    )

}

export default ResultItem