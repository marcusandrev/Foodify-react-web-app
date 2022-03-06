import React, { Component} from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4} >
          <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="breakfast"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card> 
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2015/05/Top-10-Crazy-and-Unusual-Square-Foods-7.jpg?resize=510%2C541"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
 
  function ImageList() {
    return (
      <Box sx={{ flexGrow: 2, width: '80%', height: '70%', justifyContent: 'center' }}>
        <Grid container spacing={6}  >
          <Grid container item spacing={6} >
            <FormRow />
          </Grid>
          {/* <Grid container item spacing={6}>
            <FormRow />
          </Grid>
          <Grid container item spacing={6}>
            <FormRow />
          </Grid> */}
        </Grid>
      </Box>
    );
  }
  export default ImageList;