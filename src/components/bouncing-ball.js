import React, { useState, useEffect } from "react"

const createCursor = (width, height) => ({
  x: Math.floor(Math.random() * width),
  y: Math.floor(Math.random() * height),
  dx: Math.random() < 0.5 ? 2 : -2,
  dy: Math.random() < 0.5 ? 2 : -2,
})

export default ({ width, height }) => {
  const [cursors, setCursors] = useState([])

  const tick = () => {
    setCursors(currentCursors =>
      currentCursors.map(cursor => {
        const { x, y, dx, dy } = cursor

        let nextX = x + dx
        let nextY = y + dy
        let nextDx = dx
        let nextDy = dy

        if (nextX < 64) {
          nextX = 64
          nextDx = -dx
        }
        if (nextX + 64 >= width) {
          nextX = width - 64
          nextDx = -dx
        }

        if (nextY < 64) {
          nextY = 64
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
      currentCursors.concat(createCursor(width, height))
    )
  }

  useEffect(() => {
    if (cursors.length === 0) {
      setCursors([createCursor(width, height)])
    }
  }, [width, height, cursors])

  useEffect(() => {
    const id = setInterval(() => tick(), 10)
    return () => clearInterval(id)
  })

  return (
    <svg width={width} height={height}>
      {cursors.map(cursor => (
        <g
          onClick={() => addCursor()}
          transform={`translate(${cursor.x}, ${cursor.y})`}
        >
          <circle fill="#FFFFFF" r={64} />
        </g>
      ))}
    </svg>
  )
}
