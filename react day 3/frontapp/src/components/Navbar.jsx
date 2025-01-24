import { AppBar, Button, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const navItems = ['Home', 'About', 'Contact'];
const Navbar = () => {
  return (
      <div id='main'>
          <AppBar>
              <Toolbar>
                  <h3 >
                      NAM COLLEGE
                  </h3>
                  <div id="menu">
                      <Link to='/name'>

                          <Button class='btn' variant='text'>Name</Button>
                      </Link>
                      <Link to='/counter'>

                          <Button class='btn' variant='text'>Counter</Button>
                      </Link>
                      <Link to='/set'>

                          <Button class='btn' variant='text'>Set</Button>
                      </Link>
                      <Link to='/api'>

                          <Button class='btn' variant='text'>Api</Button>
                      </Link>
                      <Link to='/table'>

                          <Button class='btn' variant='text'>Users</Button>
                      </Link>
                  </div>

                  
              </Toolbar>
          </AppBar>
          

    </div>
  )
}

export default Navbar