import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Name.css'
const Name = () => {
    var [name, setname] = useState()
    var [value, setvalue] = useState()

    var handleinput = (b) => {
        setname(b.target.value)
    }
    var handle = () => {
        setvalue(name)
    }
  return (
      <div >
          <div class='name-div'><h1>Welcome, {value}</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleinput} /><br /><br />
              <Button variant='contained' onClick={handle}>ok</Button>
          </div>
      </div>
      
  )
}

export default Name