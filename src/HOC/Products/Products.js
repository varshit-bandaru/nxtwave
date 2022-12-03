import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dataItems } from "./../../RecoilStore";
import CardDetails from "../../Components/CardDetails/CardDetails";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

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
      <Grid
        container
        justifyContent="center"
        
        alignItems="center"
        direction="row"
      >
        <Grid item xs={10} lg={10} md={10}>
          <Paper
            component="form"
            sx={{
                width:"648px",height:"40px",borderRadius:"3px",
              p: "2px 4px",
            //   marginLeft:"24px",
              display: "flex",
              alignItems: "center",
            
            }}
          >
             <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            ></IconButton>
            <InputBase
               sx={{
                width:"648px",height:"40px",borderRadius:"3px",}}
              placeholder="Search"
            
            />
           
          </Paper>
        </Grid>

        {data.map((itemDetail, index) => (
          <Grid item sx={{width:"360px",height:"192px",border:"1px solid #D7DFE9",margin:"22px"}} >
            <CardDetails itemDetailer={itemDetail} key={index}></CardDetails>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
