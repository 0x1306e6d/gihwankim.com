import React, { useEffect, useRef, useState } from "react"

import { Box, Flex, Heading, Text } from "rebass"

import BouncingBall from "./bouncing-ball"

export default () => {
  const ref = useRef()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [ref])

  return (
    <Box backgroundColor="black" minHeight="100vh" ref={ref}>
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
      >
        <Heading color="white" fontSize={[7, 8]} fontWeight="bold">
          HELLO
        </Heading>
      </Flex>
      <Box sx={{ position: "absolute", top: 0, height: 0 }}>
        <BouncingBall width={width} height={height} />
      </Box>
    </Box>
  )
}
