import React, { useEffect, useRef, useState } from "react"

import { Box, Flex, Text } from "rebass"

const randomPick = (a, b) => {
  if (Math.random() < 0.5) {
    return a
  }
  return b
}

export default () => {
  const ref = useRef()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [cursors, setCursors] = useState([])

  const tick = () => {
    setCursors(currentCursors =>
      currentCursors.map(cursor => {
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

        return { x: nextX, y: nextY, dx: nextDx, dy: nextDy }
      })
    )
  }

  const addCursor = () => {
    setCursors(currentCursors =>
      currentCursors.concat({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        dx: randomPick(2, -2),
        dy: randomPick(2, -2),
      })
    )
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [ref])

  useEffect(() => {
    if (width > 0 && height > 0) {
      if (cursors.length === 0) {
        setCursors([
          {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            dx: randomPick(2, -2),
            dy: randomPick(2, -2),
          },
        ])
      }
    }
  }, [width, height, cursors])

  useEffect(() => {
    const id = setInterval(() => tick(), 10)
    return () => clearInterval(id)
  })

  return (
    <Flex
      alignItems="center"
      backgroundColor="black"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
      ref={ref}
    >
      {cursors.map(cursor => (
        <Box
          as="span"
          backgroundColor="white"
          height="128px"
          onClick={() => addCursor()}
          sx={{
            borderRadius: "50%",
            left: 0,
            position: "absolute",
            top: 0,
            transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          }}
          width="128px"
        />
      ))}
      <Text color="white" fontSize="64px" fontWeight="bold">
        HELLO
      </Text>
    </Flex>
  )
}
