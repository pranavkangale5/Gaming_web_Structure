import React from "react";
import { Box, Button, Input, Textarea, Text, Heading } from "@chakra-ui/react";
import bg from "../images/bg.jpg";

const Contact = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${bg}) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            w="40%"
            p="2rem"
            display={"flex"}
            flexDir={"column"}
            gap="20px"
            boxShadow="0px 5px 20px rgba(0,0,0,1)"
          >
            <Text
              color={"blackAlpha.700"}
              textAlign={"center"}
              fontSize={"20px"}
              fontWeight={"600"}
              mb="10px"
            >
              <Heading fontFamily={"viga"} color="#00f2b6" fontSize={"4rem"}>
                Contact Us
              </Heading>
            </Text>
            <Heading
              fontFamily={"viga"}
              color="#00f2b6"
              fontSize={"1.1rem"}
              fontWeight={"200"}
            >
              Name -
            </Heading>
            <Input
              isRequired
              type="text"
              color={"white"}
              outline={0}
              boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
              _focus={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
                border: "none",
              }}
              placeholder="Enter your name "
            />
            <Heading
              fontFamily={"viga"}
              color="#00f2b6"
              fontSize={"1.1rem"}
              fontWeight={"200"}
            >
              Email -
            </Heading>
            <Input
              isRequired
              type="email"
              name="email"
              color={"white"}
              outline={0}
              boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
              _focus={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
                border: "none",
              }}
              placeholder="Enter your Email "
            />
            <Heading
              fontFamily={"viga"}
              color="#00f2b6"
              fontSize={"1.1rem"}
              fontWeight={"100"}
            >
              Feedback -
            </Heading>
            <Input
              isRequired
              type="textarea"
              name="message"
              color={"White"}
              outline={0}
              boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
              _focus={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
                border: "none",
              }}
              placeholder="Enter your Feedback "
            />
            <Button type="submit" color={"white"} backgroundColor={"#1E90FF"}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Contact;
