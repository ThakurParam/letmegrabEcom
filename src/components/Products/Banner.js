import { Box, Typography } from "@mui/material";
import React from "react";
import Section from "../../common/Section";

export default function Banner() {
  return (
    <>
      <Box sx={{ width: "100%", height: "500px", position: "relative" }}>
        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              //   mt: 7,
              position: "absolute",
              top: 0,
              height: "400px",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "55px",
                color: "white",
              }}
            >
              {" "}
              Our Products
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "55px",
                color: "white",
              }}
            >
              {" "}
              Showcase
            </Typography>
          </Box>
        </Section>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: "500px",
          width: "100%",
          zIndex: -10,
        }}
      >
        <img
          alt="banner-image "
          src="/images/banner.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </>
  );
}
