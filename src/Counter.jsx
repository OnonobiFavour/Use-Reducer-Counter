import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCounter } from './useCounter'
import NestedNav from './NestedNav'

const Counter = () => {

    const Navigate = useNavigate();
    const handleclick = () =>{
      Navigate('/')
    }

    const [count,setCount, {increment, decrement, reset}] = useCounter()
  return (
    <section className="reducer">
        <NestedNav />
      <main className='App'>
        <h1 className='text--out'>{count}</h1>
        <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
        <article className="btn-wrapper">

        {/* implementing increment */}
        <button className="btn" onClick={increment}>+1</button>
  
  
        <button className="btn" onClick={reset}>Reset</button>
  
  
        {/* implementing decrement */}
        <button className="btn" onClick={decrement}>-1</button>
        </article>
  

        <div className="exit">
        <button className='btn-exit'onClick={handleclick}>&larr; Exit</button>


        </div>
      </main>
  </section>
  )
}

export default Counter