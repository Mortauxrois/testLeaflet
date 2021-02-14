import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {setData, setFilteredData} from '../actions/mapViewActions'
import { MapContainer, TileLayer} from 'react-leaflet'
import LocationMarker from './LocationMarker.js'
import ObjectsTableWrapper from './ObjectsTable'
import 'leaflet/dist/leaflet.css';
import {getData, Place} from '../dataProvider'
import {StateType} from '../reducers/reducers'
const css = require('./mapView.module.css')



type Props = {
    data: Array<Place>
    filteredData: Array<Place>
    currentId: number
    setData: Function
    setFilteredData: Function
}

const MapViewWrapper: React.FC<Props> = (props: Props) => {
    useEffect(prepareData, []);
    function prepareData(){
        const data = getData();
        props.setData(data);
    }

    return(
        <MapView {...props}/>
    )
}

const MapView: React.FC<Props> = (props: Props) => {
    const {filteredData} = props; 
    const [map, setMap] = useState <any> (null);
    useEffect(onCurrentIdChanged, [props.currentId]);
    function onCurrentIdChanged(){
        const id = props.currentId;
        if(props.data.length > 0){
                const temp = props.data.find(x => x.id === id);
                if(temp && map){
                    map.flyTo(temp.coords, map.getZoom());
                }
        }
    }

    const markers = (filteredData.length > 0)? filteredData.map( ie => {
        return(
            <LocationMarker key = {ie.id}
                            coordinates = {ie.coords}
                            markerText = {ie.name}
                            isActive = {props.currentId === ie.id}/>
        );
        })
    : null;



    return(
        <div className = {css.mapViewWrapper}>
            <MapContainer className = {css.map}
                          zoom={14}
                          scrollWheelZoom={false}
                          whenCreated={setMap}
                          center={[54.515523, 36.252038]}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
            </MapContainer>
            <ObjectsTableWrapper {...props}/>
        </div>
    )
}



const mapStateToProps = (state: StateType)  =>{
    return{
        data: state.mapView.data,
        filteredData: state.mapView.filteredData,
        currentId: state.mapView.currentId,
    }
}
export default connect(mapStateToProps, {setData, setFilteredData})(MapViewWrapper);