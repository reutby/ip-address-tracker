import React from "react";
import ArrowIcon from "../../assets/images/icon-arrow.svg"
const IPSearchBox =(props)=>{

    return (<div className="search-box">
        <input className="search-input" onChange={(e)=>props.changeInput(e)} type="text" name="search" value={props.value} placeholder="Search for any IP Address or Domain" />
        <button onClick={()=>props.clicked()} className="search-button"><img src={ArrowIcon} alt="icon-arrow"/></button>
    </div>)
}

export default IPSearchBox;