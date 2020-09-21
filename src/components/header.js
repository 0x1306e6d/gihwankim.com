import React from "react"

import { Box, Flex, Link, Heading } from "rebass"

import Divider from "./divider"

export default () => (
  <Flex
    as="header"
    flexDirection="column"
    sx={{
      paddingTop: 4,
    }}
  >
    <Heading
      as="a"
      href="/"
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
        fontSize: [6, 8],
        fontWeight: "bold",
        textDecoration: "none",
      }}
    >
      Gihwan Kim
    </Heading>
    <Divider />
    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Link href="https://gihwan.dev" variant="nav">
          Blog
        </Link>
        <Link href="https://github.com/ghkim3221" variant="nav">
          GitHub
        </Link>
      </Flex>
    </Box>
  </Flex>
)
