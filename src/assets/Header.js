import { Box, Button } from "@mui/material";
import React from "react";
import Section from "../common/Section";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
                bgcolor: "black",
                "&:hover": {
                  bgcolor: "#e88205",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Log In/Sign Up
            </Button>
          </Box>
        </Section>
      </Box>
    </>
  );
}
