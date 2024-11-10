import React, {useState} from 'react';
function Counter (){
    //Intialize the state with a count starting at 0
    const [count,setCount]=
    useState(0);

    //Function to handle increment, decrement and reset actions
    const Increment=()=>
        setCount(count +1);
    const Decrement =()=>
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
            
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}
            style={{margin:'15px',padding:'10px',fontSize:'16px'}}>
                Reset
            </button>
        </div>
    );
}

export default Counter;
