import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  
  // To navigate to the counter
  const Navigate = useNavigate();
  const handleclick = () =>{

    Navigate('/start')

  }

  return (
    <header className="header">
        
        <article className="h1-wrapper">
           <div className="circle"></div>
            <h1 className="text-wrapper">
                Create a counter with React.js
            </h1>
            
            <article className='wrap'>
              <p className='heading-sub'>Counter App With React Hook . . . </p>
               <button className='home-btn' onClick={handleclick}>Get started</button>
           </article>
        </article>
    </header>
  )
}

export default Home