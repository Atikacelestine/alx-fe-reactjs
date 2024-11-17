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

function Counter() {

  const { count, increment, decrement} \= useCounterStore();

  return (

    <div className="flex items-center justify-center"\>

      <span className="text-4xl font-bold mr-4"\>{count}</span>

      <div className="flex flex-col"\>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2" onClick={increment}>

          Increment

        </button>

        <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={decrement}>

          Decrement

        </button>

    </div>

  );

        
        <div style={{
            textAlign:'center',
            padding:'20px'
        }}>
            <h2>Counter App</h2>
            <p style= {{fontSize:'24px',
                fontWeight:'bold'
            }}>Current Count:{count}</p>

            {/*Buttons for controlling the counter*/}


const initialState \= { count: 0 };

const useCounterStore \= create((set) \=> ({

  ...initialState,

  increment: () \=> set((state) \=> ({ count: state.count + 1 })),

  decrement: () \=> set((state) \=> ({ count: state.count \- 1 })),

}));
            
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}> Increment , Decrement</button>
         <button onClick={() => setCount(count - 1)}> Decrement</button>
         <button onClick={() => setCount(0)}
                Reset
            </button>
        </div>
    );
}

export default useCounterStore;
