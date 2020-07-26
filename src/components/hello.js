import React, { useEffect, useRef, useState } from "react"

import { Flex, Text } from "rebass"

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
    <Flex
      alignItems="center"
      backgroundColor="black"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
      ref={ref}
    >
      <BouncingBall width={width} height={height} />
      <Text color="white" fontSize="64px" fontWeight="bold">
        HELLO
      </Text>
    </Flex>
  )
}
