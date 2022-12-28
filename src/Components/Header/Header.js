import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import {HeaderStyle} from "./HeaderStyles"
import Nxtwaveimage from "./../../images/NxtWave1.svg"
import avatar from "./../../images/S.svg"

function Header({setAddItemPage}) {
  return (
    <div>
        <HeaderStyle position="static" >
            <Toolbar>
                <IconButton>
                    <img src={Nxtwaveimage} /> 
                </IconButton>
           
            <Typography variant="h6" component="div" sx={{flexGrow:1}}>dsfdsf</Typography>
            <Stack direction="row" spacing={2}>
                <Button  onClick={()=>setAddItemPage(true)} sx={{backgroundColor:"#2DCA73",height:"40px",width:"107px",color:"#FFFFFF",fontSize:"14px"}}>ADD ITEM </Button>
                <img src={avatar} /> 
            </Stack>
            </Toolbar>
        </HeaderStyle>
    </div>
  )
}

export default Header