import React, { useEffect, useRef, useState } from "react"

import { Box, Flex, Text } from "rebass"

export default () => {
  const ref = useRef()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [cursor, setCursor] = useState(null)

  const tick = () => {
    const { x, y, dx, dy } = cursor

    let nextX = x + dx
    let nextY = y + dy
    let nextDx = dx
    let nextDy = dy

    if (nextX < -64) {
      nextX = -64
      nextDx = -dx
    }
    if (nextX + 64 >= width) {
      nextX = width - 64
      nextDx = -dx
    }

    if (nextY < -64) {
      nextY = -64
      nextDy = -dy
    }
    if (nextY + 64 >= height) {
      nextY = height - 64
      nextDy = -dy
    }

    setCursor({ x: nextX, y: nextY, dx: nextDx, dy: nextDy })
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [ref])

  useEffect(() => {
    if (cursor !== null) {
      setTimeout(tick, 10)
    }
  }, [cursor])

  useEffect(() => {
    if (width > 0 && height > 0) {
      setCursor({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        dx: 2,
        dy: 2,
      })
    }
  }, [width, height])

  return (
    <Flex
      alignItems="center"
      backgroundColor="black"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
      ref={ref}
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
            top: 0,
            transform: `translate(${cursor.x}px, ${cursor.y}px)`,
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
