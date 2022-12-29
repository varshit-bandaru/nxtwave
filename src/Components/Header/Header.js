import React from "react";
import { Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import { HeaderStyle, HeaderAddItemButton } from "./HeaderStyles";
import Nxtwaveimage from "./../../images/NxtWave1.svg";
import avatar from "./../../images/S.svg";

function Header({ setAddItemPage }) {
  return (
    <div>
      <HeaderStyle position="static">
        <Toolbar>
          <IconButton>
            <img src={Nxtwaveimage} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => setAddItemPage(true)}
              sx={HeaderAddItemButton}
            >
              ADD ITEM{" "}
            </Button>
            <img src={avatar} />
          </Stack>
        </Toolbar>
      </HeaderStyle>
    </div>
  );
}

export default Header;
