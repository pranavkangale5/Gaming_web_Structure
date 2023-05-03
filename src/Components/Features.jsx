import React from "react";
import {
  Box,
  Grid,
  Text,
  GridItem,
  Heading,
  Avatar,
  Flex,
  Center,
} from "@chakra-ui/react";
import quality from "../images/quality.png";
import affordale from "../images/affordable.png";
import counter from "../images/feature-bg-bottom.svg";
import service from "../images/feature-bg-top.svg";
import EFFICIENT from "../images/EFFICIENT.png";
import PROFESSIONAL from "../images/PROFESSIONAL.png";

const Features = () => {
  return (
    <Box
      pb={"5rem"}
      pl={"2rem"}
      pr={"2rem"}
      justifyContent={"center"}
      backgroundColor={"#00f2b6"}
      style={{
        backgroundImage: `url(${service}),url(${counter}) `,
        backgroundPosition: "right top, left bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading
        p={"2rem"}
        color={" black"}
        textAlign={"center"}
        fontFamily={"viga"}
        fontSize={"3rem"}
      >
        Features
      </Heading>
      <Flex>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={"3rem"}
          justifyItems="center"
          alignItems="center"
          pb={"3rem"}
        >
          <GridItem justifyContent={"space-evenly"}>
            <Box
              h="100%"
              w="100%"
              p={"2rem"}
              borderRadius="md"
              transition="transform 0.2s, backdrop-filter 0.2s"
              _hover={{
                transform: "scale(1.05)",
                backdropFilter: "blur(10px)",
              }}
              _groupHover={{
                backdropFilter: "blur(10px)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.57)",
              }}
            >
              <Center>
                <Avatar src={quality} size={"xl"} />
              </Center>
              <Heading
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Quality
              </Heading>
              <Text
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Quality related content goes here . Lorem ipsum, dolor sit amet
                consectetur adipisicing elit.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              h="100%"
              w="100%"
              p={"2rem"}
              borderRadius="md"
              transition="transform 0.2s, backdrop-filter 0.2s"
              _hover={{
                transform: "scale(1.05)",
                backdropFilter: "blur(10px)",
              }}
              _groupHover={{
                backdropFilter: "blur(10px)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.57)",
              }}
            >
              <Center>
                <Avatar src={affordale} size={"xl"} />
              </Center>
              <Heading
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Affordable
              </Heading>
              <Text
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Affordable related content goes here. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              h="100%"
              w="100%"
              p={"2rem"}
              borderRadius="md"
              transition="transform 0.2s, backdrop-filter 0.2s"
              _hover={{
                transform: "scale(1.05)",
                backdropFilter: "blur(10px)",
              }}
              _groupHover={{
                backdropFilter: "blur(10px)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.57)",
              }}
            >
              <Center>
                <Avatar src={EFFICIENT} size={"xl"} />
              </Center>
              <Heading
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Efficent
              </Heading>
              <Text
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Efficient related content goes here . Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box
              h="100%"
              w="100%"
              p={"2rem"}
              borderRadius="md"
              transition="transform 0.2s, backdrop-filter 0.2s"
              _hover={{
                transform: "scale(1.05)",
                backdropFilter: "blur(10px)",
              }}
              _groupHover={{
                backdropFilter: "blur(10px)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.57)",
              }}
            >
              <Center>
                <Avatar src={PROFESSIONAL} size={"xl"} />
              </Center>
              <Heading
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Professional
              </Heading>
              <Text
                color={"Black"}
                fontSize={"1rem"}
                fontFamily={"viga"}
                textAlign={"center"}
              >
                Professional related content goes here. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Features;
