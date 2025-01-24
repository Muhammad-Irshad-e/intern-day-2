import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Set = () => {
    var [name, setname] = useState()
    var angular = () =>
    {
        setname("Angular")
    }
    var setreact = () => {
        setname("React")
    }
    var vue = () => {
        setname("Vue")
    }
    useEffect(() => {
        angular()
    },[])
  return (
      <div>
          <h2>Welcome to {name} </h2>
          <Button color='success' variant='contained' onClick={setreact}>React</Button>&nbsp;&nbsp;
          <Button color='success' variant='outlined' onClick={angular}>Angular</Button>&nbsp;&nbsp;
          <Button color='warning' variant='contained' onClick={vue}>Vue</Button>
          

    </div>
  )
}

export default Set