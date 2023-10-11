import { Box } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <Box
      bgcolor="hotpink"
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
}

export default Sidebar;
