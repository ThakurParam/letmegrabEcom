import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Section from "../common/Section";
const MenuArray = [
  {
    head: "About Us",
    options: [
      {
        name: "Company Info",
        link: "/",
      },
      {
        name: "Our Story",
        link: "/",
      },
      {
        name: "Sustainability",
        link: "/",
      },
      {
        name: "Careers",
        link: "/",
      },
    ],
  },
  {
    head: "Customer Service",
    options: [
      {
        name: "Contact Us",
        link: "/",
      },
      {
        name: "FAQ",
        link: "/",
      },
      {
        name: "Shipping & Delivery",
        link: "/",
      },
      {
        name: "Returns & Refunds",
        link: "/",
      },
      {
        name: "Order Tracking",
        link: "/",
      },
    ],
  },
  {
    head: "Shop",
    options: [
      {
        name: "Women’s Clothing",
        link: "/",
      },
      {
        name: "Men’s Clothing",
        link: "/",
      },
      {
        name: "Accessories",
        link: "/",
      },
      {
        name: "Sale Items",
        link: "/",
      },
      {
        name: "New Arrivals",
        link: "/",
      },
    ],
  },
  {
    head: "Policies",
    options: [
      {
        name: "Privacy Policy",
        link: "/",
      },
      {
        name: "Terms & Conditions",
        link: "/",
      },
      {
        name: "Cookie Policy",
        link: "/",
      },
    ],
  },
];
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          mt: 7,
          py: 5,
          // borderTop: "1px solid black",
          boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <Section>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Box>
                    <img
                      alt="logo"
                      src="/images/image.png"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "19px",
                    }}
                  >
                    Launching Your Style, One Click at a Time!
                  </Typography>
                </Box>
              </Grid>
              {MenuArray?.map((item, index) => (
                <Grid item xs={6} md={2} key={index}>
                  <Box
                    sx={{
                      // mt: 6,
                      //   textAlign: "center",
                      ".head-typo": {
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "17px",
                        px: 1,
                      },
                      ".typo": {
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "14px",
                        px: 1,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="p" className="head-typo">
                      {item.head}{" "}
                    </Typography>
                    {item.options.map((list, idx) => (
                      <a
                        href={list.link}
                        style={{
                          textTransform: "none",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            py: 1,
                            mt: 2,
                            "&:hover": {
                              borderRadius: "10px",
                              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
                              transform: "translateY(-1px)",
                              transition: "all 0.3s ease-in-out",
                            },
                            cursor: "pointer",
                          }}
                          key={idx}
                        >
                          <Typography variant="p" className="typo">
                            {list.name}{" "}
                          </Typography>
                        </Box>
                      </a>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>
        <Box
          sx={{
            py: 1,
            mt: 5,
            borderTop: "1px solid black",
            textAlign: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontFamily: "Montserrat", fontSize: "10px" }}
          >
            Designed by{" "}
            <span style={{ fontWeight: 600, cursor: "pointer" }}>Param</span> @
            LetmeGrab
          </Typography>
        </Box>
      </Box>
    </>
  );
}
