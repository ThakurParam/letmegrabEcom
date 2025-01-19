import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import Section from "../common/Section";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const { userName, avatarUrl } = userData;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Log out function
  const handleLogOut = () => {
    localStorage.clear(); // Clear all data in localStorage
    window.location.reload(); // Refresh the page
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
              <img alt="logo" src="/images/image.png" />
            </Box>
            {userName ? (
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
                >
                  <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                </Menu>
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
