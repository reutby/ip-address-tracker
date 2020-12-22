import React from "react";
import ResultItem from "./ResultItem/ResultItem";
const IPDisplayResult = (props) => {
    const resultItems = [];
    for (let key in props.data) {
        resultItems.push({
            title: key, content: props.data[key]
        });
    }

    return (
        <div className="results-div">
            {props.loading ? <p className="loading">Loading...</p> :
                resultItems.map((element) => {
                    return <ResultItem title={element.title} content={element.content} key={element.title} />
                })}
        </div>
    )

}

export default IPDisplayResult;