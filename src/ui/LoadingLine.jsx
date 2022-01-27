import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoadingLine() {
  return (
    <div>
      <Box sx={{ width: "100%", height: "800px" }}>
        <LinearProgress />
      </Box>
    </div>
  );
}
