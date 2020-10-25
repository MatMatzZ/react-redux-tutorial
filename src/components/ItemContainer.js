import React,{useState} from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of {props.nameOfItem} - {props.item}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick={props.dispatch}>Buy {number} {props.nameOfItem} </button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    const nameItemState = ownProps.cake ? 'Cake' : 'Ice Cream'
    return {
        item : itemState,
        nameOfItem: nameItemState
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake()) : ()=> dispatch(buyIceCream()) 
    return {
        dispatch: dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
