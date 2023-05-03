import { Heading, Box, background } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import counter from "../images/feature-bg-bottom.svg";
import service from "../images/feature-bg-top.svg";

const Reviews = () => {
  return (
    <Box style={{ background: "linear-gradient( #00f2b6, white)" }}>
      <Heading color={"black"} fontFamily={"viga"} fontSize={"2rem"}>
        Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        veniam illum, quidem necessitatibus, quo illo libero suscipit neque
        quibusdam quam reprehenderit voluptas blanditiis animi, nam ipsa iusto
        at qui eveniet?
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque
        modi ut aspernatur quam perferendis repellendus, omnis vitae accusantium
        aut nisi, officiis fugit quo assumenda nobis, unde quisquam pariatur
        alias!
      </Heading>
    </Box>
  );
};

export default Reviews;
