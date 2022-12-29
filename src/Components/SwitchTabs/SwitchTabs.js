import * as React from "react";
import Tabs from "@mui/material/Tabs";
import { Grid } from "@mui/material";
import { Tabstyle } from "./SwitchTabsStyle";

function SwitchTabs({ handleChange, value }) {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: "46px" }}>
      <Grid item>
        <Tabs value={value} onChange={handleChange} centered>
          <Tabstyle colorChange={true} label="Item One" />
          <Tabstyle colorChange={false} label="Item Two" />
          <Tabstyle label="Item Three" />
        </Tabs>
      </Grid>
    </Grid>
  );
}

export default SwitchTabs;
