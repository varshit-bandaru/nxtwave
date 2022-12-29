import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import {
  Typographys,
  Subtitle,
  Linker,
  Description,
  BoxWidth,
  GridPaddingOfcard,
  CardImageDivstyle,
  CardImagestyle,
} from "./CardDetailsStyles";

function CardDetails({ itemDetailer }) {
  return (
    <Box sx={BoxWidth}>
      <CardContent>
        <Grid container justifyContent="center" sx={GridPaddingOfcard}>
          <Grid item ls={3} md={3} lg={3}>
            <div style={CardImageDivstyle}>
              <img
                style={CardImagestyle}
                src={itemDetailer ? itemDetailer.icon_url : ""}
              />
            </div>
          </Grid>
          <Grid item ls={9} md={9} lg={9}>
            <Typographys>{itemDetailer && itemDetailer.title}</Typographys>
            <Subtitle> {itemDetailer && itemDetailer.category}</Subtitle>
          </Grid>
          <Grid item ls={12} md={12} lg={12}>
            <Linker>
              {" "}
              <a href={itemDetailer && itemDetailer.link}>
                {itemDetailer && itemDetailer.link}
              </a>
            </Linker>

            <p>
              <Description>
                {itemDetailer && itemDetailer.description}
              </Description>{" "}
            </p>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}

export default CardDetails;
