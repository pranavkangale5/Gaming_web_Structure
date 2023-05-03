import React from "react";
import { Button, Image, Box } from "@chakra-ui/react";

import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      w="100%"
      px="5"
      align="center"
      justify="space-between"
      style={{ backgroundColor: "black" }}
    >
      <Image src={logo} h="100px" />
      <Box
        style={{
          marginLeft: "30%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <a
          style={{ color: "#66CDAA", fontSize: "large", fontWeight: "500" }}
          href="./"
        >
          Home
        </a>
        <a
          style={{ color: "#66CDAA", fontSize: "large", fontWeight: "500" }}
          href="./Games"
        >
          Games
        </a>
        <a
          style={{ color: "#66CDAA", fontSize: "large", fontWeight: "500" }}
          href="./Terms"
        >
          Terms of Service
        </a>
        <a
          style={{ color: "#66CDAA", fontSize: "large", fontWeight: "500" }}
          href="./Contact"
        >
          Contact Us
        </a>
      </Box>
      <Button
        style={{
          marginLeft: "13rem",
          marginTop: "1.7rem",
        }}
      >
        Join Phoenix
      </Button>
    </Box>
  );
};

export default Navbar;
