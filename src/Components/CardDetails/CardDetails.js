import { Grid } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Typographys,Subtitle,Linker,Description} from './CardDetailsStyles'

function CardDetails({itemDetailer}) {
  console.log(itemDetailer)
  return (
    <Box sx={{ minWidth: 360 }}>   
    <CardContent>
      <Grid container justifyContent="center" sx={{padding:"24px"}} >
        <Grid item ls={3} md={3} lg={3} >
          <div style={{width:"44px",height:"44px",border:"1px solid #D7DFE9",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"24px",height:"20.39px"}} src={itemDetailer? itemDetailer.icon_url:""} /></div></Grid>
        <Grid item  ls={9} md={9} lg={9}><Typographys>{itemDetailer && itemDetailer.title  }</Typographys>
        <Subtitle> {itemDetailer && itemDetailer.category}</Subtitle></Grid>
        <Grid item  ls={12} md={12} lg={12}>
      
        <Linker > <a href={itemDetailer && itemDetailer.link}>{itemDetailer && itemDetailer.link}</a></Linker>
         
          
          <p><Description>{itemDetailer && itemDetailer.description}</Description> </p>
        </Grid>
      </Grid>
    </CardContent>
  </Box>
  )
}

export default CardDetails