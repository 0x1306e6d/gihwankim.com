import React from "react"

import { Box, Flex } from "rebass"

import Header from "./header"

export default ({ children }) => (
  <Flex flexDirection="column">
    <Header />
    <Box as="main" p={4}>
      {children}
    </Box>
  </Flex>
)
