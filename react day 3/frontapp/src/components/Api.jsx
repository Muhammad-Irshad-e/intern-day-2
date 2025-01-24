import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
const Api = () => {
    var [product, setproduct] = useState([])
    
    axios.get("https://fakestoreapi.com/products")
        .then((r) => {
        setproduct(r.data)
    })
  return (
      <div>
          <Grid container spacing={2}>
              {product.map((v) => {
                  return (
                      
              <Grid item xs={12} md={4} sm={6}>
             
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  component="img"
                  alt="green iguana"
                  height="400"
                  image={v.image}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {v.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {v.description}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions>
          </Card>
                      </Grid>
                  )
              })}
          </Grid>
    </div>
  )
}

export default Api