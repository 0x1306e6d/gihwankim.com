import React from "react"

import { Box } from "rebass"

import { Terminal, Input, Output } from "./terminal"

export default () => (
  <Box
    sx={{
      width: "100%",
      maxWidth: ["540px", "720px", "960px", "1140px"],
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: [2, 4],
      marginBottom: [2, 4],
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <Terminal>
      <Input>whoami</Input>
      <Output>Gihwan Kim, a Software Engineer.</Output>
    </Terminal>
  </Box>
)
