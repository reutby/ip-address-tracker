import React from "react"
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { locationIcon } from "../../components/UI/locationIcon/locationIcon";
import MyComponent from "./MyComponent/MyComponent";



const IPTrackerMap = (props) => {

    return (
        <MapContainer className="map-container" center={props.position} zoomControl={false} zoom={13} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.position} icon={locationIcon} ></Marker>
            <MyComponent position={props.position} zoom={20}/>
        </MapContainer>

    )
}

export default IPTrackerMap;