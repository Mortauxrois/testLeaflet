import L from 'leaflet';
import pointIconRed from "../assets/img/pointRed.svg"
import pointIconBlack from "../assets/img/pointBlack.svg"

export const pointIconR = new L.icon({
    iconUrl: pointIconRed, 
    iconRetinaUrl: pointIconRed,  
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,  
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'point-icon'
});


export const pointIconB = new L.icon({
    iconUrl: pointIconBlack, 
    iconRetinaUrl: pointIconBlack,  
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,  
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'point-icon'
});

