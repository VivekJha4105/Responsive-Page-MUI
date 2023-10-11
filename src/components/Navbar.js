import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h5"
          sx={{ fontSize: "1.3rem", display: { xs: "none", sm: "block" } }}
        >
          myFeeds
        </Typography>
        <LanguageIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
