import React, { useReducer} from 'react';
import { useNavigate} from 'react-router';
import NestedNav from './NestedNav';



const setValue = (state, action) =>{
    switch(action.type){
      case "INCREMENT":
        return{value: state.value + 1}
      case "DECREMENT":
        return{value: state.value - 1}
      case "Reset":
        return {value: 0}
      case "update":
        return {...state, value: Number(action.field)}
      default:
        return state;
    }
  }
  
  
  const Reducer = () => {

      const Navigate = useNavigate();
      const handleclick = () =>{
        Navigate('/')
      }

      // targeting the input value and updating on the initial value....
      const handleChange = (e) => {
        e.preventDefault()
        dispatch({
          type: "update",
          field: e.target.value
        })
        console.log(e.target.value)
      }
  
    const [state, dispatch] = useReducer(setValue, {value: Number('0')});

    return (
        <section className="reducer">
          <NestedNav />
            <main className='App'>
              <h1 className='text--out'>{state.value}</h1>
                <input type="text" 
                 value={state.value}
              
                  onChange={handleChange}
               />


              <article className="btn-wrapper">

                {/*  implementing increment.. */}
              <button className="btn" onClick={() =>{
        
                dispatch({ type: "INCREMENT"});
        
              }}>+1</button>
        
                {/* reset implementation */}
              <button className="btn" onClick={()=>{
        
                dispatch({type: "Reset"})
        
              }}>Reset</button>
        
        
               {/*  implementing decrement  */}
              <button className="btn" onClick={()=>{
        
                dispatch({type: "DECREMENT"})
        
              }}>-1</button>
              </article>
        
      
              <div className="exit">
              <button className='btn-exit'onClick={handleclick}>&larr; Exit</button>
      
              </div>
            </main>
        </section>
  
      
    )
}

export default Reducer