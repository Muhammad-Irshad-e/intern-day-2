import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
const Tables = () => {
  var [rows, setrows] = useState([])
  axios.get("http://localhost:3006/view")
    .then((r) => {
      setrows(r.data)
    })
  const updateVal = (val) => {
    navigate('/form',{ state:{val}})
  }
  const delVal = (id) => {
    axios.delete("http://localhost:3006/delete/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      }
    )
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }}  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Age</TableCell>
              <TableCell align='center'>Department</TableCell>
              <TableCell align='center' >Salary</TableCell>
              <TableCell align='center'>Actions</TableCell>

              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align='center'>{row.Age}</TableCell>
                <TableCell align='center'>{row.Dept}</TableCell>
                <TableCell align='center'>{row.Sal}</TableCell>
                <TableCell align='center'>
                  <Button color='error' variant='contained' onClick={() => { delVal(row._id) }}>
                    Delete
                  </Button>
                  &nbsp;
                  <Button color='primary' variant='contained' onClick={() => { updateVal(row) }}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tables