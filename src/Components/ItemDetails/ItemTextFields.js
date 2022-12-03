import { TextField, Box, Grid } from "@mui/material";
import React from "react";
import { TextFieldLabels } from "./ItemDetailsStyles";

let textFieldSize={width:"320px",height:"40px"}
function ItemTextFields() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={6}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item md={6}>
             <Box>       
            <TextFieldLabels>ITEM NAME</TextFieldLabels>
            <br/>            
            <TextField  sx={textFieldSize}/>
            <br/> 
            </Box>
            <Box>
            <TextFieldLabels>LINK</TextFieldLabels>
            <br/> 
            <TextField  sx={textFieldSize} />
            <br/> 
            </Box>
            <TextFieldLabels>RESOURCE NAME</TextFieldLabels>
            <br/> 
            <TextField  sx={textFieldSize} />
            <br/> 
            <TextFieldLabels>DESCRIPTION</TextFieldLabels>
            <br/> 
            <TextField   sx={textFieldSize}/>
            </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}></Grid>
    </Grid>
  );
}

export default ItemTextFields;
