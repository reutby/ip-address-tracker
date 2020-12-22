import {useMap} from "react-leaflet";
const MyComponent = (props) => {
    const map = useMap();
    map.setView(props.position, props.zoom);
    return null;
}

export default MyComponent;