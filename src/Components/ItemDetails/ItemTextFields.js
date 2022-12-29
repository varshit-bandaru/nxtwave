import { TextField, Box, Grid, Typography } from "@mui/material";

import {
  ItemDetailsHeadingandButton,
  MainGrid_AddItemPage,
  TextFieldLabels,
  ItemDetailsEntryPageTitle,
  textFieldsStlyles,
  linkTextFieldStlyles,
  textFieldDescriptionStlyle,
  TextFieldGridMargin,
  submitButtonStyle,
} from "./ItemDetailsStyles";
import React, { useState } from "react";
import ItemDetailsPageImage from "../../images/image9.svg";
import axios from "axios";
import { createItem } from "../../Apis";
function ItemTextFields() {
  const [fields, setFields] = useState({});
  const [errors, setError] = useState({});
  const handleSubmit = (e) => {
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setError({ ...errors, ...validationErrors });
      return;
    }

    if (
      fields.item_name &&
      fields.item_link &&
      fields.item_resource &&
      fields.item_description
    ) {
      const data = {
        item_name: fields.item_name,
        item_link: fields.item_link,
        item_resource: fields.item_resource,
        item_description: fields.item_description,
      };

      sendDataApi(data);
    }
  };

  function sendDataApi(info) {
    axios.post("https://cors-anywhere.herokuapp.com/", createItem);
  }
  return (
    <Grid
      container
      direction="row"
      sx={MainGrid_AddItemPage}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={12} lg={12} sx={ItemDetailsHeadingandButton}>
            <ItemDetailsEntryPageTitle> Item Details</ItemDetailsEntryPageTitle>
          </Grid>
          <Grid item md={7} lg={7} sx={TextFieldGridMargin}>
            <TextFieldLabels>ITEM NAME</TextFieldLabels>

            <TextField
              size="small"
              name="item_name"
              sx={{ ...textFieldsStlyles }}
              helperText={
                errors.item_name ? (
                  <span style={ErrorMsgColor}>{errors.item_name}</span>
                ) : (
                  ""
                )
              }
              id="outlined-basic"
              value={fields.item_name}
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
              helperText={
                errors.item_link ? (
                  <span style={ErrorMsgColor}>{errors.item_link}</span>
                ) : (
                  ""
                )
              }
              id="outlined-basic"
              value={fields.item_link}
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
              helperText={
                errors.item_resource ? (
                  <span style={ErrorMsgColor}>{errors.item_resource}</span>
                ) : (
                  ""
                )
              }
              id="outlined-basic"
              value={fields.item_resource}
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
              helperText={
                errors.item_description ? (
                  <span style={ErrorMsgColor}>{errors.item_description}</span>
                ) : (
                  ""
                )
              }
              id="outlined-basic"
              value={fields.item_description}
              onChange={(event) => handleUserInput(event)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} lg={12} sx={ItemDetailsHeadingandButton}>
            <button style={submitButtonStyle} onClick={handleSubmit}>
              CREATE
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} lg={6}>
        <img
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
          src={ItemDetailsPageImage}
        />
      </Grid>
    </Grid>
  );
}

export default ItemTextFields;
