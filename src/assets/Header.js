import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Section from "../common/Section";
import { useNavigate } from "react-router-dom";
import { LunchDining, MenuBook, MenuOpen } from "@mui/icons-material";

export default function Header() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const { userName, avatarUrl } = userData;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
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
              <img
                alt="logo"
                src="/images/image.png"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </Box>
            {userName ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Montserrat",
                    textDecoration: "underline",
                    fontWeight: 500,
                    cursor: "pointer",
                    display: { md: "flex", xs: "none" },
                  }}
                  onClick={() => navigate("/our-product")}
                >
                  Our Products
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    alt={userName}
                    src={avatarUrl || ""}
                    sx={{ height: "35px", width: "35px", cursor: "pointer" }}
                    onClick={handleAvatarClick}
                  />
                  <Typography
                    variant="p"
                    sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
                  >
                    {userName}
                  </Typography>
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: "none", xs: "flex" } }}
                  >
                    <MenuOpen sx={{ color: "black" }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    sx={{ display: { md: "flex", xs: "none" } }}
                  >
                    <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                  </Menu>
                </Box>
                <Drawer
                  anchor="left"
                  open={openDrawer}
                  onClose={handleDrawerToggle}
                >
                  <Box
                    sx={{
                      width: 250,
                      padding: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/our-product");
                        setOpenDrawer(false);
                      }}
                    >
                      Our Products
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleLogOut();
                        setOpenDrawer(false);
                      }}
                    >
                      Log Out
                    </Typography>
                  </Box>
                </Drawer>
              </Box>
            ) : (
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
            )}
          </Box>
        </Section>
      </Box>
    </>
  );
}
