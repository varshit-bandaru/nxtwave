import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dataItems } from "./../../RecoilStore";
import CardDetails from "../../Components/CardDetails/CardDetails";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import {
  InputInSearch,
  PaperStyles,
  cardDetailsUpperGrid,
} from "./ProductsStyles";

function Products() {
  const [data, setData] = useRecoilState(dataItems);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://media-content.ccbp.in/website/react-assignment/resources.json`,
    })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={11} lg={11} md={11}>
          <Paper component="form" sx={PaperStyles}>
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            ></IconButton>
            <InputBase sx={InputInSearch} placeholder="Search" />
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {data.map((itemDetail, index) => (
          <Grid item sx={cardDetailsUpperGrid}>
            <CardDetails itemDetailer={itemDetail} key={index}></CardDetails>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
