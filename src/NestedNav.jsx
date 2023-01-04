import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NestedNav = () => {

    // Setting an active border radius..
    const [active, setActive] = useState(false)
    const format = active ? "border" : 'no-border'

    const switchCase = () => {
        setActive(prev => !prev)
    }
  return (
    <div className='nested-nav'>
        <li>
            <Link to='/start/useCounter' className={format} onClick={switchCase}>UseCounter</Link>
        </li>
        <li>
            <Link to='/start' className={format} onClick={switchCase}>UseReducer</Link>
        </li>
    </div>
  )
}

export default NestedNav