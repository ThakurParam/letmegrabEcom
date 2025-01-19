import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Section from "../../common/Section";
import { useNavigate } from "react-router-dom";

export default function ShopNow() {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", xs: "center" },
            alignItems: "center",
            my: 7,
            flexDirection: { md: "row", xs: "column" },
            gap: 2,
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: { md: "55px", xs: "35px" },
            }}
          >
            Our Best Sellers
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              textTransform: "none",
              px: 4,
              py: 1,
              fontSize: "18px",
              borderRadius: "14px",
              bgcolor: "#e88205",
              cursor: "pointer",
            }}
            onClick={() => {
              const userData = JSON.parse(localStorage.getItem("userData"));
              if (userData && userData.userName) {
                navigate("/our-product");
              } else {
                alert("Please continue by logging in.");
              }
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Section>
    </>
  );
}
