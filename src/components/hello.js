import React from "react"

import { Flex, Heading } from "rebass"

export default () => (
  <Flex
    alignItems="center"
    backgroundColor="black"
    flexDirection="column"
    justifyContent="center"
    minHeight="100vh"
  >
    <Heading color="white" fontSize={[7, 8]} fontWeight="bold">
      HELLO
    </Heading>
  </Flex>
)
