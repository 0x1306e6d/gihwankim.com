import React from "react"

import { Box, Flex } from "rebass"

import Container from "./container"
import Footer from "./footer"
import Header from "./header"

export default ({ children }) => (
  <>
    <Header />
    <Flex flexDirection="column" minHeight="100vh">
      <Box as="main" px={3} py={[1, 3]}>
        <Container>{children}</Container>
      </Box>
      <Footer />
    </Flex>
  </>
)
