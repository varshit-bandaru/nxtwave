import { TextField, Box, Grid, Typography } from "@mui/material";
// import React from "react";
import { TextFieldLabels,ItemDetailsEntryPageTitle } from "./ItemDetailsStyles";
import React, { useState } from "react";
import ItemDetailsPageImage from  "../../images/image9.svg"
import axios from "axios"
import {createItem} from "../../Apis"

let textFieldSize = { width: "320px", height: "40px" };
function ItemTextFields() {
  const [fields, setFields] = useState({});
  const [errors, setError] = useState({});
  const handleSubmit = (e) => {
    // e.preventDefault();
   
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      console.log("asddsa")
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setError({ ...errors, ...validationErrors });
      return;
    }
    console.log(fields)
    if (fields.item_name && fields.item_link && fields.item_resource && fields.item_description) {
      // alert("asd")
      const data = {
        item_name: fields.item_name,
        item_link: fields.item_link,
        item_resource: fields.item_resource,
        item_description: fields.item_description,
      };
      // window.alert("subit success", JSON.stringify(data));
      sendDataApi(data)
      console.log("----data----", data);
    }
  };
  function sendDataApi(info)
  {
    axios.post("https://cors-anywhere.herokuapp.com/"+createItem)
  }
  const validate = (name, value) => {
    switch (name) {
      case "item_name":
        if (!value || value.trim() === "") {
          return "Item name is Required";
        } else {
          return "";
        }
      case "item_link":
        if (!value) {
          return "Link is Required";
        } else {
          return "";
        }
      case "item_resource":
        if (!value) {
          return "Resource is Required";
        }  else {
          return "";
        }
      case "item_description":
        if (!value) {
          return "Description is Required";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };
  const handleUserInput = (e) => {
    setError({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  let textFieldsStlyles = {
    width: "320px",
   
    // width: isCheck ? "97%" : "80%",
    "& label.Mui-focused": {
      color: "#AD184C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#EAEAEA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "0px",
        borderColor: "#EAEAEA",
      },
      "&:hover fieldset": {
        borderColor: "#EAEAEA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#EAEAEA"
      },

      "& ::placeholder": {
        color: "#231F20",
        opacity: 1,
      },
      "&.MuiInputBase-root": { height: "40px" ,backgroundColor:"#FFFFFF"},
    },
  };
  let linkTextFieldStlyles = {
    width: "320px",
   
    // width: isCheck ? "97%" : "80%",
    "& label.Mui-focused": {
      color: "#AD184C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#EAEAEA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "0px",
        borderColor: "#EAEAEA",
      },
      "&:hover fieldset": {
        borderColor: "#EAEAEA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#EAEAEA"
      },

      "& ::placeholder": {
        color: "#231F20",
        opacity: 1,
      },
      "&.MuiInputBase-root": { height: "40px" ,backgroundColor:"#FFFFFF",color:"blue"},
    },
  };
  let textFieldDescriptionStlyle= {
    width: "320px",
  // width: isCheck ? "97%" : "80%",
  "& label.Mui-focused": {
    color: "#AD184C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EAEAEA",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0px",
      borderColor: "#EAEAEA",
    },
    "&:hover fieldset": {
      borderColor: "#EAEAEA",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EAEAEA",
    },

    "& ::placeholder": {
      color: "#231F20",
      opacity: 1,
    },
    "&.MuiInputBase-root": { height: "80px" ,backgroundColor:"#FFFFFF"},
  }};
  let TextFieldGridMargin={marginBottom:"32px"}
  let submitButtonStyle= {color:"white",width:"93px",height:"40px",borderRadius:"4px",padding:"8px 20px 8px 20px",backgroundColor:"#0B69FF"}
  return (
    <Grid container direction="row" sx={{height:"100vh",backgroundColor:"#F5F5F5"}} justifyContent="center" alignItems="center">
      
      <Grid item md={6}>
     
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={12} lg={12} sx={{textAlign:"center",...TextFieldGridMargin}}>
                <ItemDetailsEntryPageTitle> Item Details</ItemDetailsEntryPageTitle>
          </Grid>
          <Grid item md={7} lg={7} sx={TextFieldGridMargin}>
          
            <TextFieldLabels >ITEM NAME</TextFieldLabels>
           
            <TextField
              size="small"
              name="item_name"
              sx={{...textFieldsStlyles}}
              // value={""}
              helperText={errors.item_name?<span style={{color:"red"}}>{errors.item_name}</span>:""}
              id="outlined-basic"
              value={fields.item_name}
              // placeholder=""
              onChange={(event) => handleUserInput(event)}
              variant="outlined"
            />    
           
          </Grid>
          <Grid item md={7} sx={TextFieldGridMargin}>
            <TextFieldLabels>LINK</TextFieldLabels>
            <TextField
              size="small"
              name="item_link"
              sx={linkTextFieldStlyles}
              // value={""}
              helperText={errors.item_link?<span style={{color:"red"}}>{errors.item_link}</span>:""}
              id="outlined-basic"
              value={fields.item_link}
              // placeholder=""
              onChange={(event) => handleUserInput(event)}
              variant="outlined"
            />    
          </Grid>
          <Grid item md={7} sx={TextFieldGridMargin}>
            <TextFieldLabels>RESOURCE NAME</TextFieldLabels>
            <TextField
              size="small"
              name="item_resource"
              sx={textFieldsStlyles}
              // value={""}
              helperText={errors.item_resource?<span style={{color:"red"}}>{errors.item_resource}</span>:""}
              id="outlined-basic"
              value={fields.item_resource}
              // placeholder=""
              onChange={(event) => handleUserInput(event)}
              variant="outlined"
            />    
          </Grid>
          <Grid item md={7} sx={TextFieldGridMargin}>
            <TextFieldLabels>DESCRIPTION</TextFieldLabels>
            <TextField
              size="small"
              name="item_description"
              sx={textFieldDescriptionStlyle}
              // value={""}
              helperText={errors.item_description?<span style={{color:"red"}}>{errors.item_description}</span>:""}
              id="outlined-basic"
              value={fields.item_description}
              // placeholder=""
              onChange={(event) => handleUserInput(event)}
              variant="outlined"
            />    
          </Grid>
           <Grid item md={12} lg={12} sx={{textAlign:"center",...TextFieldGridMargin}}>
                <button style={submitButtonStyle} onClick={handleSubmit}>CREATE</button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} lg={6}><img style={{width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100vh"}} src={ItemDetailsPageImage}/></Grid>
    </Grid>
  );
}
{/* <button
type="button"
className="login-button pointer"
onClick={handleSubmit}
>
Submit
</button> */}
export default ItemTextFields;
