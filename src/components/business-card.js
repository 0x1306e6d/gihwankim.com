import React from "react"

import { Box } from "rebass"

export default ({ children }) => (
  <Box
    pt={["133.33%", "56.25%"]}
    sx={{
      borderWidth: "2px",
      borderStyle: "dashed",
      position: "relative",
      width: "100%",
    }}
  >
    <Box sx={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}>
      {children}
    </Box>
  </Box>
)
