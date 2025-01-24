import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Navbar = () => {
  return (
    <div>
          <AppBar>
        <Toolbar>

          
          <Typography class='txt' variant="h1" sx={{ my: 2 }}>
                      Dashboard
          </Typography>
          <div class='menu'><Link to='/form'>
            <Button class='btn' variant='contained'>Add</Button>

          </Link>
            <Link to='/table'>
              <Button class='btn' variant='contained'>Table</Button>

            </Link></div>
                  

              </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
