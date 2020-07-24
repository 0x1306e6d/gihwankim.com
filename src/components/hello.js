import React, { useState } from "react"

import { Box, Flex, Text } from "rebass"

export default () => {
  const [cursor, setCursor] = useState(null)

  const handleMouseMove = e => {
    e.preventDefault()
    setCursor({ x: e.clientX, y: e.clientY })
  }

  return (
    <Flex
      alignItems="center"
      backgroundColor="black"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
      onMouseMove={handleMouseMove}
    >
      {cursor !== null && (
        <Box
          as="span"
          backgroundColor="white"
          height="128px"
          sx={{
            borderRadius: "50%",
            left: 0,
            position: "absolute",
            transform: `translate(${cursor.x - 64}px, ${cursor.y - 64}px)`,
            top: 0,
            zIndex: 0,
          }}
          width="128px"
        />
      )}
      <Text color="white" fontSize="64px" fontWeight="bold">
        HELLO
      </Text>
    </Flex>
  )
}
