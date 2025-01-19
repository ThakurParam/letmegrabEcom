import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ height: "820px", width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} mt={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "70%" }}>
                <Stack spacing={3}>
                  <Box sx={{ height: "35px", width: "150px" }}>
                    <img
                      src="/images/image.png"
                      alt="logo"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box>
                    <Stack spacing={4} mt={7}>
                      <Stack spacing={1}>
                        <Typography
                          variant="h3"
                          sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
                        >
                          Hi, Welcome!{" "}
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          Please login to continue
                        </Typography>
                      </Stack>
                      <Input
                        disableUnderline={true}
                        sx={{
                          border: "1px solid lightgrey",
                          borderRadius: "10px",
                          pl: 1,
                          py: 0.5,
                          width: "100%",
                        }}
                        placeholder="Enter your userName.."
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        disableUnderline={true}
                        sx={{
                          border: "1px solid lightgrey",
                          borderRadius: "10px",
                          pl: 1,
                          py: 0.5,
                          width: "100%",
                        }}
                        placeholder="Enter your password.."
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={togglePasswordVisibility}
                              aria-label="toggle password visibility"
                              edge="end"
                              sx={{ mr: 1 }}
                            >
                              {showPassword ? (
                                <Visibility
                                  sx={{ fontSize: "20px", color: "black" }}
                                />
                              ) : (
                                <VisibilityOff sx={{ fontSize: "20px" }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                          py: 1,
                          borderRadius: "10px",
                          bgcolor: "black",
                          "&:hover": {
                            bgcolor: "#e88205",
                          },
                        }}
                      >
                        Log In
                      </Button>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          variant="p"
                          sx={{ fontFamily: "Montserrat", fontSize: "13px" }}
                        >
                          Don't have account!{" "}
                          <span
                            style={{ fontWeight: 600, cursor: "pointer" }}
                            onClick={() => navigate("/sign-up")}
                          >
                            Sign Up
                          </span>
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "820px", width: "100%" }}>
              <img
                src="/images/loginimage.png"
                alt="banner-image"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
