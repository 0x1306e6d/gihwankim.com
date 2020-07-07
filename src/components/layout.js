import React from "react"

import { Box, Flex } from "rebass"

import Container from "./container"
import Footer from "./footer"
import Header from "./header"

export default ({ children }) => (
  <Flex flexDirection="column" sx={{ minHeight: "100vh" }}>
    <Header />
    <Box as="main" px={3} py={[1, 3]}>
      <Container>{children}</Container>
    </Box>
    <Footer />
  </Flex>
)
