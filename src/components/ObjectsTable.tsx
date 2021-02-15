import React, {useState} from 'react'
import {connect} from 'react-redux'
import {setCurrentId} from '../actions/mapViewActions'
import {Place} from '../dataProvider'
const css = require('./objectsTable.module.css')

type Props = {
    data: Array<Place>
    filteredData: Array<Place>
    currentId: number
    setData: Function
    setFilteredData: Function
    setCurrentId: Function
}

const ObjectsTableWrapper: React.FC<Props> = (props: Props) => {
    const[filterStr, setFilterStr] = useState('');

    function onFilterChange(v: string){
        setFilterStr(v);
        let re = new RegExp(v);
        let filtered = props.data.filter(a => {
            if(re.test(a.name)) return true;
        })
        props.setFilteredData(filtered);
    }

    return(
        <div>
            <input className = {css.filterInput}
                placeholder = 'Фильтр'
                value = {filterStr}
                onChange = {e => {onFilterChange(e.target.value)}}></input>
            <ObjectsTable data = {props.filteredData} setCurrentId = {props.setCurrentId}/>
        </div>
    )
}


type TableProps = {
    data: Array<Place>
    setCurrentId: Function
}

const ObjectsTable: React.FC<TableProps> = (props: TableProps) => {
    const {data} = props;

    let template: any =  <tr><td></td><td></td></tr>;
    if(data !== undefined){
        template = data.map( ie => {
        return(
            <tr key = {ie.id}
                onClick = {() => {props.setCurrentId(ie.id)}}>
                <td>{ie.name}</td>
                <td>{ie.description}</td>
             </tr>
        )
    });
    }
    return(
        <div>
        <table className = {css.table}>
            <tbody>
                <tr><th>Достопримечательность</th><th>Описание</th></tr>
                    {template}
            </tbody>
        </table>
    </div>
    )
}

export default connect(null, {setCurrentId})(ObjectsTableWrapper);

