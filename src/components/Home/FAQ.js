import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: "panel1",
      title: "What is your return policy?",
      content: "Our return policy lasts 30 days from the date of purchase.",
    },
    {
      id: "panel2",
      title: "How can I track my order?",
      content:
        "You can track your order via the tracking link sent to your email.",
    },
    {
      id: "panel3",
      title: "Do you offer international shipping?",
      content: "Yes, we offer international shipping to select countries.",
    },
    {
      id: "panel4",
      title: "How do I contact customer support?",
      content: "You can contact customer support through our help center.",
    },
  ];

  return (
    <>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
                >
                  Frequently Asked Questions
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontFamily: "Montserrat", fontWeight: 500 }}
                >
                  Here you will get the FAQs of our Website
                </Typography>
              </Box>

              <Box my={6}>
                {faqData.map((faq) => (
                  <Accordion
                    key={faq.id}
                    expanded={expanded === faq.id}
                    onChange={handleChange(faq.id)}
                    style={{
                      borderRadius: "15px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      marginBottom: "16px",
                      border: expanded === faq.id ? "2px solid green" : "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Box
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "green",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transform:
                              expanded === faq.id
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                          }}
                        >
                          <ExpandMore style={{ color: "white" }} />
                        </Box>
                      }
                      aria-controls={`${faq.id}-content`}
                      id={`${faq.id}-header`}
                      style={{
                        padding: "16px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Montserrat",
                          fontSize: { md: "22px", xs: "17px" },
                          fontWeight: 600,
                        }}
                      >
                        {faq.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        padding: "16px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{
                          fontFamily: "Montserrat",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        {faq.content}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
                <Box>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    Have more doubts? Connect by clicking the button below to
                    book your free 1:1 counselling session
                  </Typography>
                  <Button
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                      bgcolor: "black",
                      color: "white",
                      borderRadius: "10px",
                      textTransform: "none",
                      my: 2,
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    {" "}
                    Connect Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: { md: "flex", xs: "none" } }}
            >
              <Box sx={{ height: "100%", width: "100%", borderRadius: "20px" }}>
                <img
                  alt="img"
                  src="/images/loginimage.png"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
