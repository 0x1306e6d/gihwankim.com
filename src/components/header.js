import React from "react"

import { Box, Flex, Link } from "rebass"

export default () => (
  <Flex
    alignItems="center"
    as="header"
    px={[2, 3]}
    py={2}
    sx={{
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      position: "fixed",
      top: 0,
    }}
    width="100%"
  >
    <Link href="/" variant="nav">
      Gihwan Kim
    </Link>
    <Box mx="auto" />
    <Link href="https://github.com/ghkim3221/gihwankim.com" variant="nav">
      GitHub
    </Link>
  </Flex>
)
