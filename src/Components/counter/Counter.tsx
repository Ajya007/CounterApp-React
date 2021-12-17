
import React from "react"
import {useState} from "react"
import Button1 from "../Buttons/Button1"


const Counter = () => {
    const [counter,setCounter] = useState<number>(0)
    const [inputVal,setInputVal]=useState<number>(1)

    const addHandler = () => {
        setCounter(counter+inputVal)
    }

     const subHandler = ()  => {
        setCounter(counter-inputVal)
    }

    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
     setInputVal(parseInt(e.target.value))
    }


    return(
        <div className="counter">

       <h1 data-testid="header">Counter App</h1>

       <h2 data-testid="counter" className={`${counter>=100 ? "green" : ""}${counter<=-100 ? "red" : ""}`}>{counter}</h2>

       <div className="buttonAddSub">
        
 <Button1 testid="Sub" value="Sub" click={subHandler}/>
           <input type="number" data-testid="input" value={inputVal} onChange={inputHandler} />

          

              <Button1 testid="Add" value="Add" click={addHandler}/>
 
       </div>
        
        </div>
    )
}

export default Counter;