import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.png";
import feature from "../images/feature-bg-top.svg";
import bottom from "../images/feature-bg-bottom.svg";

const Games = () => {
  const dt = [
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
    {
      pic: logo,
      name: "Phoenix",
    },
  ];
  return (
    <Box
      mt="0rem"
      pb={"4rem"}
      w="100%"
      minH={"100vh"}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      flexWrap="wrap"
      gap={{ base: "1.2rem", md: "1.2rem", lg: "1.3rem" }}
      backgroundColor={"#00f2b6"}
      style={{
        backgroundImage: `url(${feature}),url(${bottom}) `,
        backgroundPosition: "right top, left bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {dt.map((item) => (
        <Box
          boxShadow="0px 5px 20px rgba(0,0,0,0.700)"
          // border="10px solid white"
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent="center"
          w={{ base: "291px", md: "200px", lg: "260px" }}
          pt={"1.5rem"}
          pb="2rem"
          mt={"4rem"}
          mb="2.4rem"
          // backgroundColor={"black"}
        >
          <Image src={item.pic} alt="nothing" w="80%" m="auto" />
          <Text fontSize={"1.6rem"}>{item.name}</Text>
          <p style={{ textAlign: "center", color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            facilis molestiae alias magnam
          </p>
        </Box>
      ))}
    </Box>
  );
};

export default Games;
