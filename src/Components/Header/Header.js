import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import {HeaderStyle} from "./HeaderStyles"

function Header() {
  return (
    <div>
        <HeaderStyle position="static" >
            <Toolbar>
                <IconButton>

                </IconButton>
           
            <Typography variant="h6" component="div" sx={{flexGrow:1}}>dsfdsf</Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Features </Button>
                <Button color="inherit">Features </Button>
            </Stack>
            </Toolbar>
        </HeaderStyle>
    </div>
  )
}

export default Header