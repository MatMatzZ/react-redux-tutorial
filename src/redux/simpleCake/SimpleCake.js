import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buycake, buyWithQuantity, buyAsync, selectCount} from './simpleCakeSlice'

export function SimpleCake() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    return(
        <div>
            <h2>Amount of Cake: {count}</h2>
            <input type="number" value={incrementAmount} onChange={(e)=>{setIncrementAmount(e.target.value)}}></input>
            <button onClick={()=> dispatch(buycake())}>Buy 1 Cake</button>
            <button onClick={()=> dispatch(buyWithQuantity(Number(incrementAmount)))}>Buy {incrementAmount} Cake</button>
            <button onClick={()=> dispatch(buyAsync(Number(incrementAmount)))}Buy Cake Async>Buy Async</button>
        </div>
    )
}

