
import React from "react"
import {useState} from "react"
import Button1 from "../Buttons/Button1"


const Counter = () => {
    const [counter,setCounter] = useState<number>(0)

    const addHandler = () => {
        setCounter(counter+1)
    }

     const subHandler = ()  => {
        setCounter(counter-1)
    }


    return(
        <div className="counter">

       <h1 data-testid="header">Counter App</h1>

       <h2 data-testid="counter">{counter}</h2>

       <div className="buttonAddSub">
           <Button1 testid="Add" value="Add" click={addHandler}/>
           <Button1 testid="Sub" value="Sub" click={subHandler}/>
 
           
       </div>
        
        </div>
    )
}

export default Counter;