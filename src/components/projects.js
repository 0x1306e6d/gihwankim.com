import React from "react"

import { Box, Flex, Heading, Link, Text } from "rebass"

export default () => (
  <Flex backgroundColor="white" flexDirection="column">
    <Databute />
    <Seoulthings />
  </Flex>
)

const Project = ({ children }) => (
  <Box minHeight="100vh" p={[2, 4]}>
    {children}
  </Box>
)

const Databute = () => (
  <Project>
    <Heading fontSize={[6, 7, 8]}>Projects / databute</Heading>
    <Text fontSize={[3, 4, 5]}>분산 인-메모리 키-값 스토어</Text>
    <Flex flexDirection={["column", "row"]} mt={[2, 4]}>
      <Box width={[1, 0.5]}>
        <Heading fontSize={[5, 6, 7]}>databuter</Heading>
        <Link
          href="https://github.com/databute/databuter"
          sx={{
            color: "#007bff",
            fontSize: [4, 5, 6],
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          &gt; Go to GitHub
        </Link>
      </Box>
      <Box width={[1, 0.5]}>
        <Heading fontSize={[5, 6, 7]}>databutee</Heading>
        <Link
          href="https://github.com/databute/databutee"
          sx={{
            color: "#007bff",
            fontSize: [4, 5, 6],
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          &gt; Go to GitHub
        </Link>
      </Box>
    </Flex>
  </Project>
)

const Seoulthings = () => (
  <Project>
    <Heading fontSize={[6, 7, 8]}>Projects / seoulthings</Heading>
    <Text fontSize={[3, 4, 5]}>
      서울시에서 제공하는 공유 물품을 한 곳에서 찾아볼 수 있는 서비스
    </Text>
    <Flex flexDirection={["column", "row"]} mt={[2, 4]}>
      <Box width={[1, 0.5]}>
        <Heading fontSize={[5, 6, 7]}>Android</Heading>
        <Link
          href="https://github.com/ghkim3221/seoulthings-android"
          sx={{
            color: "#6048B4",
            fontSize: [4, 5, 6],
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          &gt; Go to GitHub
        </Link>
      </Box>
      <Box width={[1, 0.5]}>
        <Heading fontSize={[5, 6, 7]}>Server</Heading>
        <Link
          href="https://github.com/ghkim3221/seoulthings-server"
          sx={{
            color: "#6048B4",
            fontSize: [4, 5, 6],
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          &gt; Go to GitHub
        </Link>
      </Box>
    </Flex>
  </Project>
)
