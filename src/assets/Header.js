import { Box, Button } from "@mui/material";
import React from "react";
import Section from "../common/Section";

export default function Header() {
  return (
    <>
      <Box>
        <Section>
          <Button
            variant="contained"
            sx={{ textTransform: "none", fontFamily: "Montserrat" }}
          >
            Log In/Sign Up
          </Button>
        </Section>
      </Box>
    </>
  );
}
