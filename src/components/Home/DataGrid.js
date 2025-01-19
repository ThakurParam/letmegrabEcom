import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Section from "../../common/Section";

export default function DataGrid() {
  const SwiperArray = [
    {
      image: "/swiperimages/Coffee 1.jpg",
      heading: "Ceremony",
      description:
        "The ceremony is a celebration that resonates with everyone, blending tradition, emotion, and purpose into a powerful experience. It’s a moment where people from all walks of life come together, united by a shared vision and collective spirit. The energy in the air is infectious, creating a deep sense of belonging and connection. Through heartfelt speeches, inspiring performances, and meaningful rituals, the event leaves a lasting impression on every soul present. This is more than just a gathering—it's a memory in the making, meant to inspire and uplift.",
    },
    {
      image: "/swiperimages/Coffee 2.webp",
      heading: "Race",
      description:
        "Race Coffee isn’t just a drink—it’s fuel for champions. Crafted with premium beans and bold flavors, it’s designed to energize your day and keep you ahead of the pack. Whether you’re gearing up for a challenge or simply need a boost, Race Coffee powers your focus and drive. With every sip, you’ll feel the rush of quality and determination. Race Coffee: for those who never settle for second place.",
    },
    {
      image: "/swiperimages/Coffee 3.jpg",
      heading: "Mugg Of Coffee",
      description:
        "A mug of coffee is more than just a beverage—it’s a moment of comfort and warmth. As the steam rises, it invites a pause in the chaos of the day, offering a brief escape. The rich aroma fills the air, setting the tone for focus, relaxation, or inspiration. Whether it’s a quick sip during a busy morning or a leisurely drink in the evening, the coffee mug becomes a companion in every moment. It’s simple, yet essential—a small ritual that keeps us going.",
    },
    {
      image: "/swiperimages/Coffee 3.webp",
      heading: "juicer",
      description:
        "A juicer is a versatile kitchen appliance that transforms fresh fruits and vegetables into vibrant, nutrient-packed beverages. With just a press of a button, it extracts juices while preserving the natural flavors and vitamins. Whether it's a refreshing citrus blend or a green veggie mix, the juicer offers an easy way to boost your daily intake of healthy, hydrating ingredients. Its sleek design and efficient function make it a must-have for those seeking a quick, nutritious boost. Juicing is not just about taste; it's about nourishing your body with nature’s best",
    },
    {
      image: "/swiperimages/Coffee 4.jpg",
      heading: "Ceremony",
      description:
        "The ceremony is a celebration that resonates with everyone, blending tradition, emotion, and purpose into a powerful experience. It’s a moment where people from all walks of life come together, united by a shared vision and collective spirit. The energy in the air is infectious, creating a deep sense of belonging and connection. Through heartfelt speeches, inspiring performances, and meaningful rituals, the event leaves a lasting impression on every soul present. This is more than just a gathering—it's a memory in the making, meant to inspire and uplift.",
    },
    {
      image: "/swiperimages/Coffee 4.webp",
      heading: " party cofee",
      description:
        "Coffee for party pours adds a lively and energizing touch to any celebration. Perfect for keeping guests awake and chatting through the night, it offers a bold, aromatic experience with every cup. Whether served hot or iced, it can be infused with creative flavors like vanilla, caramel, or hazelnut to delight the crowd. A coffee bar with different brew options and toppings encourages guests to personalize their drinks, making it an interactive experience. When the music is loud and the conversation flows, coffee ensures everyone stays alert and enjoys every moment.",
    },
    {
      image: "/swiperimages/Coffee 5.webp",
      heading: "blue tokai",
      description:
        "Blue Tokai is a renowned coffee roastery that has become a staple for coffee enthusiasts in India. Known for its direct trade relationships with farmers, Blue Tokai sources premium beans from across the country, offering a variety of blends and single-origin options. Their focus on quality and sustainability sets them apart, delivering fresh, expertly roasted coffee that highlights unique flavor profiles. From rich, bold brews to smooth, light cups, Blue Tokai appeals to all palates. It’s more than just coffee—it’s a journey of taste and a commitment to ethical sourcing",
    },
    {
      image: "/swiperimages/Coffee 6.webp",
      heading: "blue tokai",
      description:
        "Blue Tokai is a renowned coffee roastery that has become a staple for coffee enthusiasts in India. Known for its direct trade relationships with farmers, Blue Tokai sources premium beans from across the country, offering a variety of blends and single-origin options. Their focus on quality and sustainability sets them apart, delivering fresh, expertly roasted coffee that highlights unique flavor profiles. From rich, bold brews to smooth, light cups, Blue Tokai appeals to all palates. It’s more than just coffee—it’s a journey of taste and a commitment to ethical sourcing",
    },
    {
      image: "/swiperimages/Coffee 7.webp",
      heading: "cold brew",
      description:
        "Cold brew is a smooth, refreshing coffee made by steeping coarsely ground coffee beans in cold water for an extended period, typically 12-24 hours. Unlike traditional hot-brewed coffee, the cold brewing process results in a naturally sweet, less acidic, and highly concentrated coffee that can be served over ice or diluted with milk or water. The slow extraction preserves the coffee's rich flavors, offering a mellow, bold taste that’s perfect for warm weather or anytime you want a chilled, energizing pick-me-up. Cold brew is a versatile drink, ideal for those seeking a caffeine kick without the bitterness of hot coffee.",
    },
    {
      image: "/swiperimages/Coffee 8.webp",
      heading: "cold brew",
      description:
        "Cold brew is a smooth, refreshing coffee made by steeping coarsely ground coffee beans in cold water for an extended period, typically 12-24 hours. Unlike traditional hot-brewed coffee, the cold brewing process results in a naturally sweet, less acidic, and highly concentrated coffee that can be served over ice or diluted with milk or water. The slow extraction preserves the coffee's rich flavors, offering a mellow, bold taste that’s perfect for warm weather or anytime you want a chilled, energizing pick-me-up. Cold brew is a versatile drink, ideal for those seeking a caffeine kick without the bitterness of hot coffee.",
    },
    {
      image: "/swiperimages/Coffee.jpg",
      heading: "cer",
      description: "",
    },
    {
      image: "/swiperimages/Coffee.png",
      heading: "master roaster",
      description:
        "A master roaster is a highly skilled professional who specializes in roasting coffee beans to perfection, unlocking the full range of flavors and aromas. With extensive knowledge of various coffee bean types, roast profiles, and brewing techniques, the master roaster is responsible for controlling every aspect of the roasting process, including temperature, time, and airflow. Their expertise ensures that each batch of beans is roasted to bring out its unique characteristics, whether it’s bright and fruity or rich and bold. A master roaster’s craft is essential in creating high-quality coffee that consistently delivers a memorable cup.",
    },
    {
      image: "/swiperimages/Coffee.webp",
      heading: "Race",
    },
  ];
  return (
    <>
      <Section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 7,
            mt: 10,
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "Montserrat",
              fontSize: { md: "60px", xs: "35px" },
              fontWeight: 600,
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            {" "}
            Our Few Best Products
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {SwiperArray?.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{ position: "relative", height: "400px", width: "100%" }}
                >
                  <img
                    src={item?.image}
                    alt="img"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      padding: "10px",
                      textAlign: "center",
                      boxSizing: "border-box",
                      textTransform: "uppercase",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                    }}
                  >
                    {item?.heading}{" "}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Section>
    </>
  );
}
