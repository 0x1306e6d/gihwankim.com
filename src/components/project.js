import React from "react"

import { Flex, Heading, Text } from "rebass"

export default ({ title, description, url }) => (
  <Flex
    alignItems="start"
    justifyContent="center"
    flexDirection="column"
    sx={{
      padding: "16px",
      borderColor: "#e1e4e8",
      borderRadius: ".5rem",
      borderStyle: "solid",
      borderWidth: "1px",
    }}
  >
    <Heading
      as="a"
      href={url}
      sx={{
        color: "#0366d6",
        fontSize: "18px",
        fontWeight: "bord",
        textDecoration: "none",
      }}
    >
      {title}
    </Heading>
    <Text
      sx={{
        flexGrow: "1",
        marginTop: "8px",
        color: "gray",
        fontSize: "14px",
      }}
    >
      {description}
    </Text>
  </Flex>
)
