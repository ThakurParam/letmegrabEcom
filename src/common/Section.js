import { Box, Container } from "@mui/material";
import React from "react";

export default function Section({ children }) {
  return (
    <Box>
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
}
