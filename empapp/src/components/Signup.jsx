import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = (upval) => {
  const [input, setinput] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
  var navigate = useNavigate()
  
  const inputHandler=(e) => {
    setinput({ ...input,[e.target.name]: e.target.value })
    console.log(input)
    
  }
  const addInput = () => {
    navigate('/')
    
    try {
      axios.post("http://localhost:3006/add", input)
        .then((res) => {
          alert(res.data.message)
          console.log(res.data.message)
          navigate('/table')
      })

    } catch (error) {
      
    }
  }
  return (
      <div>
      <TextField  name="Name" value={input.Name} label="Name" variant="outlined" onChange={inputHandler} /><br /><br />
      <TextField  name="Age" value={input.Age} label="Age" variant="outlined" onChange={inputHandler} /><br /><br />
      <TextField  name="Dept" value={input.Dept} label="Department" variant="outlined" onChange={inputHandler} /><br /><br />
      <TextField name="Sal" value={input.Sal} label="Salary" variant="outlined" onChange={inputHandler} /><br /><br />
        <Button class='add-btn' variant='contained' onClick={addInput}>Add</Button>

    </div>
  )
}

export default Signup