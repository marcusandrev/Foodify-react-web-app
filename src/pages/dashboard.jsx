import React from 'react'

import Navbar3 from '../components/navbar3';
import { Button } from '@mui/material';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dashboard from "../assets/dashboard/dashboard.png"
import chart from "../assets/dashboard/chart.png"
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB966",
    },
    secondary: {
      main: "#FFFF",
    },
  },
  typography: {
    fontFamily: "Fredoka",
  },
});



function Dashboard() {
    return (
    <ThemeProvider theme={theme}>
        <Navbar3 />
        <div style={{paddingTop: '200px', width:'1200px', margin:'auto', paddingLeft: '70px'}}>
          <img src={dashboard} style={{width:'90%', height:'auto', justifyContent:'center'}}/>
        </div>
        <hr width='1130px'/>
        <div style={{fontWeight:'bold', paddingLeft:'115px', paddingTop:'20px'}}>Select your preferred food choices:</div>
        <div style={{paddingTop:'30px', paddingLeft:'110px', paddingBottom:'30px'}}>
          <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}
            variant='contained'>
              Freshness</Button>
          <Button 
            variant='outlined' 
            startIcon={<SavingsOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}>
              Non-vegetarian</Button>
          <Button 
            variant='outlined' 
            startIcon={<SpaOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}>
              Vegan</Button>
          <Button 
            variant='outlined' 
            startIcon={<FavoriteBorderOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}>
              Healthy</Button>
          <Button 
            variant='outlined' 
            startIcon={<AcUnitOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}>
              Dairy</Button>
        </div>
        <hr width='1130px'/>
        <div style={{fontWeight:'bold', paddingLeft:'115px', paddingTop:'20px'}}>Select your secondary preferred food choices:</div>
        <div style={{paddingTop:'30px', paddingLeft:'110px', paddingBottom:'30px'}}>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}
            variant='outlined'>
              Country of Origin</Button>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}
            variant='outlined'>
              Regional Product</Button>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}
            variant='outlined'>
              Eco-Friendly</Button>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}
            variant='contained'>
              Neutral</Button>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px'}}
            variant='outlined'>
              Animal Friendly</Button>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px', marginTop: '40px'}}
            variant='contained'>
              CO2 impact</Button>
        <Button 
            startIcon={<AutoAwesomeOutlinedIcon/>} 
            style={{marginRight:'30px', width:'15em', height:'4em', borderRadius: '20px', marginTop: '40px'}}
            variant='outlined'>
              Plastic Free</Button>
        </div>
        <hr width='1130px'/>
        <div style={{paddingTop: '40px', width:'600px', margin:'auto', paddingLeft: '70px'}}>
          <img src={chart} style={{width:'90%', height:'auto', justifyContent:'center'}}/>
        </div>
    </ThemeProvider>
  )
}

export default Dashboard