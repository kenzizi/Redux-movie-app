import React from 'react'
import {connect} from 'react-redux'
import { setTitleFilter} from './Actions/action'

const NameFilter = ({value = '', onChange = () => {}}) => (
    <div className="name-filter">
        <input
            className="name-filter-text"
            type="text"
            value={value}
            onChange={(event) => { //function traja3 fi input ou t7ot fih fi onChange eli khdemna beha louta 
                onChange(event.target.value) //onChange hethi heya fou9aniya 
            }} />
      </div>
)
const mapDispatchToProps= dispatch =>{
    return {
        onChange :(title)=>{ dispatch(setTitleFilter(title))
        }
    }

}
const mapStateToProps = state => {
    return {
        value: state.titleFilter
    }
}

const NameFilterContainer = connect(mapStateToProps,mapDispatchToProps)(NameFilter)

export default NameFilterContainer