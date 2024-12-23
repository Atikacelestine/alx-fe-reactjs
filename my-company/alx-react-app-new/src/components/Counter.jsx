import React, {useState} from 'react';
function Counter (){
    //Intialize the state with a count starting at 0
    const [count,setCount]=
    useState(0);

    //Function to handle increment, decrement and reset actions
    const increment=()=>
        setCount(count +1);
    const decrement =()=>
        setCount(count -1);
    const reset =()=> setCount(0);

    return (
        <div style={{
            textAlign:'center',
            padding:'20px'
        }}>
            <h2>Counter App</h2>
            <p style= {{fontSize:'24px',
                fontWeight:'bold'
            }}>Current Count:{count}</p>

            {/*Buttons for controlling the counter*/}
            <button onClick= {increment}
            style={{margin:'15px',padding:'10px',fontSize:'16px'}}>
                Reset
            </button>
        </div>
    );
}

export default Counter;