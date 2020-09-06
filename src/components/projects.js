import React from "react"

import { Box, Flex, Heading, Text } from "rebass"

import Project from "./project"

export default () => (
  <Box
    sx={{
      width: "100%",
      maxWidth: ["540px", "720px", "960px", "1140px"],
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: [4, 5],
      marginBottom: [4, 5],
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <Flex
      alignItems={["start", "center"]}
      justifyContent="center"
      flexDirection="column"
      marginBottom={[3, 4]}
    >
      <Heading fontSize={[6, 7, 8]} fontWeight="normal">
        Projects
      </Heading>
      <Text>I love toy projects.</Text>
    </Flex>
    <Box
      sx={{
        display: "grid",
        gridGap: [2, 3],
        gridTemplateColumns: ["1f", "1fr 1fr 1fr"],
      }}
    >
      <Project
        title="databute"
        description="Distributed In-memory Key-value Store"
        url="https://github.com/databute"
      />
      <Project
        title="seoulthings"
        description="서울시에서 제공하는 공유 물픔을 한 곳에서 찾아볼 수 있는 서비스"
        url="https://github.com/ghkim3221/seoulthings-android"
      />
      <Project
        title="chendian"
        description="An online endianness converter to convert the endianness of hex string into short, int, long, float and double interactively."
        url="https://chendian.dev"
      />
      <Project
        title="boj"
        description="깔끔한 Baekjoon Online Judge 코드 관리를 위한 커맨드 라인 명령어"
        url="https://github.com/ghkim3221/boj"
      />
    </Box>
  </Box>
)
