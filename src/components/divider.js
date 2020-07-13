import React from "react"

import { Box } from "rebass"

export default props => (
  <Box
    {...props}
    as="hr"
    sx={{
      bg: "gray",
      border: 0,
      height: "1px",
    }}
  />
)
