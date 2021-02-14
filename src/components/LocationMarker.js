import React from 'react'
import {Marker, Popup} from 'react-leaflet'
import {pointIconR, pointIconB} from './PointIcon.js'

    const LocationMarker = (props) => {
        const {coordinates, markerText} = props;
        const icon = (props.isActive)? pointIconR : pointIconB;
        return (
        <Marker position={coordinates}
                icon = {icon}
                > 
            <Popup>{markerText}</Popup>
        </Marker>
        )
    }

    export default LocationMarker;