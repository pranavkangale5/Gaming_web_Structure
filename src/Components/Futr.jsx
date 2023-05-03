import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Futr = () => {
  return (
    <>
      <Box
        w="100%"
        bg="black"
        p="3rem"
        position={"absolute"}
        // bottom="-9.6rem"
        display={"flex"}
        justifyContent="space-around"
      >
        <Text color="#00f2b6" textAlign={"center"} fontSize="1.2rem">
          Phoenix &trade;
          <br />
          All rights reserved &reg; <br />
        </Text>
        <Text color="#00f2b6" textAlign={"center"} fontSize="0.9rem">
          &copy; Pranav kangale <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          omnis harum ?
        </Text>
      </Box>
    </>
  );
};
export default Futr;
