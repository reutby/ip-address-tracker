import React, { useState, useEffect } from "react"
import axios from "axios";
import IPDisplayResult from "../../components/IPDisplayResult/IPDisplayResult";
import IPTrackerMap from "../../components/IPTrackerMap/IPTrackerMap";
import IPSearchBox from "../../components/IPSearchBox/IPSearchBox";

const IPTracker = () => {

    const baseUrl = "https://geo.ipify.org/api/v1?apiKey="+process.env.REACT_APP_GEO_API_KEY;

    const [searchInputVal, setSearchInput] = useState("");
    
    const [loading,setLoading] = useState(true);
    const [url, setUrlSearch] = useState(baseUrl + '&ipAddress=8.8.8.8');
    const [position, setPosition] = useState([37.38,-127]);
    const [ipSearchData, setIpData] = useState({
        ipAddress: null,
        location: null,
        timeZone: null,
        isp: null
    }
    );

        
    
    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            axios.get(url)
                .then((res) => {
                    setLoading(false);
                    const updateSearchData = {
                        ipAddress: res.data.ip,
                        location: res.data.location.region + ', '
                            + res.data.location.city + ', ' + res.data.location.postalCode,
                        timeZone: res.data.location.timezone,
                        isp: res.data.isp
                    }
                    const updatePosition = [res.data.location.lat, res.data.location.lng];
                    setIpData(updateSearchData);
                    setPosition(updatePosition);
                })
                .catch((err) => {
                    setLoading(false);
                    console.log(err);
                });
        }

        fetchData();
    }, [url])

    const changeInputHandler = (event) => {
        const val = event.target.value;
        setSearchInput(val);
    }

    const clickedHandler = () => {
        setUrlSearch(baseUrl + "&ipAddress=" + searchInputVal);
    }


    return (
        <React.Fragment>
            <IPSearchBox value={searchInputVal} clicked={clickedHandler} changeInput={changeInputHandler} />
            <IPDisplayResult data={ipSearchData} loading={loading}/>
            <IPTrackerMap position={position} />
        </React.Fragment>
    );
}

export default IPTracker;