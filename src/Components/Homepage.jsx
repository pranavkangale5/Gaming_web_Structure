import React from "react";
import { Box } from "@chakra-ui/react";
import vid from "../Video/feature.mp4";

import "./Homepage.css";

import Features from "./Features";
import Reviews from "./Reviews";

const Homepage = () => {
  return (
    <>
      <Box className="homepage-main">
        <video src={vid} autoPlay loop muted />
        <Box className="homepage-des">
          <p>
            Thisis not real text ! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Corporis vitae, asperiores itaque maxime expedita
            nostrum tempora dolores consequuntur sed nihil incidunt tenetur
            magnam? Incidunt sint similique doloribus ducimus nostrum ex?Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sed dolor
            repellendus laboriosam qui repudiandae rem itaque voluptatem iusto
            cumque, enim blanditiis ab ipsum alias, sit tempora, aut magni Lorem
            ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.irdjhdjdjdd8y89
          </p>
        </Box>
      </Box>
      <Box className="wrapper-top">
        <section className="stats">
          <Box className="yt-container">
            <iframe
              className="yt-video"
              src="https://www.youtube.com/embed/Rif-RTvmmss"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Box>
        </section>
      </Box>
      {/* Features Section */}
      <Features />

      {/* <Reviews /> */}
    </>
  );
};

export default Homepage;
