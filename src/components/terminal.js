import React from "react"

import { Box, Flex, Text } from "rebass"

const TerminalHeader = () => (
  <Flex
    alignItems="center"
    justifyContent="start"
    flexDirection="row"
    sx={{
      paddingTop: "8px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "8px",
      backgroundColor: "#404040",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#ff453a",
        borderRadius: "100%",
        width: "15px",
        height: "15px",
        marginTop: "0",
        marginLeft: "4px",
        marginRight: "4px",
        marginBottom: "0",
      }}
    />
    <Box
      sx={{
        backgroundColor: "#ffd60a",
        borderRadius: "100%",
        width: "15px",
        height: "15px",
        marginTop: "0",
        marginLeft: "4px",
        marginRight: "4px",
        marginBottom: "0",
      }}
    />
    <Box
      sx={{
        backgroundColor: "#32d74b",
        borderRadius: "100%",
        width: "15px",
        height: "15px",
        marginTop: "0",
        marginLeft: "4px",
        marginRight: "4px",
        marginBottom: "0",
      }}
    />
  </Flex>
)

export const Input = ({ children }) => <Text>$ {children}</Text>

export const Output = ({ children }) => <Text>{children}</Text>

export const Terminal = ({ children }) => (
  <Box
    sx={{
      padding: 0,
      color: "#ffffff",
      fontFamily: "monospace",
    }}
  >
    <TerminalHeader />
    <Box
      sx={{
        paddingTop: "8px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingBottom: "8px",
        backgroundColor: "#1e1e1e",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    >
      {children}
    </Box>
  </Box>
)
