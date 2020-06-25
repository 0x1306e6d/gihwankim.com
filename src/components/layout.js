import React from "react"

import { Box, Flex } from "rebass"

import Footer from "./footer"
import Header from "./header"

export default ({ children }) => (
  <Flex flexDirection="column" sx={{ minHeight: "100vh" }}>
    <Header />
    <Box as="main" p={4}>
      {children}
    </Box>
    <Footer />
  </Flex>
)
