import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Name.css'

const Counter = () => {
    var [count, setcount] = useState(0)
    const add = () => {
        setcount(count+1)
    }
    const sub = () => {
        setcount(count - 1)
    }
  return (
      <div>
          <div class='name-div'>
          <h1>Counter {count}</h1>  
          <Button color='success' variant='contained' onClick={add}>+</Button>&nbsp;&nbsp;
              <Button color='error' variant='contained' onClick={sub}>-</Button>
          </div>
    </div>
  )
}

export default Counter