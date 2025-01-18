import { Box, Button } from "@mui/material";
import React from "react";
import Section from "../common/Section";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <Section>
          <Box
            sx={{
              py: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <img alt="logo" src="/images/image.png" />
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontFamily: "Montserrat",
                borderRadius: "10px",
                bgcolor: "#e88205",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
            >
              Log In/Sign Up
            </Button>
          </Box>
        </Section>
      </Box>
    </>
  );
}
