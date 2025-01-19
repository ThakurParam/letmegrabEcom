import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({ userName: "", email: "" });
  const [errorstext, setErrorstext] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const userNameRegex = /^(?=.*[!@#$%^&*])[a-z]+$/;

    let userNameError = "";
    let emailError = "";

    // if (!userNameRegex.test(userName)) {
    //   userNameError =
    //     "Username must be all lowercase and contain at least one special character.";
    // }

    if (!emailRegex.test(email)) {
      emailError = "Enter a valid email address.";
    }

    setErrors({ userName: userNameError, email: emailError });

    return !userNameError && !emailError;
  };
  const handleSignup = async () => {
    if (validateInputs()) {
      setLoading(true);
      const userData = { userName, email, password };

      setTimeout(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("Signup successful", userData);
        enqueueSnackbar("Sign up successfully! Please login to continue", {
          variant: "success",
        });
        setLoading(false);
        navigate("/login");
      }, 2000);
    }
  };
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (password && e.target.value !== password) {
      setErrorstext("Passwords doen't match.");
    } else {
      setErrorstext("");
    }
  };
  const isFormValid = () => {
    return userName && email && password && confirmPassword && !errorstext;
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
              <Box sx={{ width: { md: "70%", xs: "90%" } }}>
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
                    <Stack spacing={5} mt={7}>
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
                          Please Sign Up to continue
                        </Typography>
                      </Stack>
                      <Stack spacing={3}>
                        <Box>
                          <Input
                            disableUnderline={true}
                            sx={{
                              border: "1px solid lightgrey",
                              borderRadius: "10px",
                              pl: 1,
                              py: 0.5,
                              width: "100%",
                            }}
                            placeholder="Enter your username..."
                            value={userName}
                            onChange={(e) =>
                              setUserName(e.target.value.toLowerCase())
                            }
                          />
                          {errors.userName && (
                            <Typography
                              sx={{ fontSize: "12px", color: "red", mt: 1 }}
                            >
                              {errors.userName}
                            </Typography>
                          )}
                        </Box>
                        <Box>
                          <Input
                            disableUnderline={true}
                            sx={{
                              border: "1px solid lightgrey",
                              borderRadius: "10px",
                              pl: 1,
                              py: 0.5,
                              width: "100%",
                            }}
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <Typography
                              sx={{ fontSize: "12px", color: "red", mt: 1 }}
                            >
                              {errors.email}
                            </Typography>
                          )}
                        </Box>
                        <Input
                          type={showPassword ? "text" : "password"}
                          disableUnderline={true}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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

                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          disableUnderline={true}
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          sx={{
                            border: "1px solid lightgrey",
                            borderRadius: "10px",
                            pl: 1,
                            py: 0.5,
                            width: "100%",
                            mt: 2,
                          }}
                          placeholder="Confirm your password.."
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                onClick={toggleConfirmPasswordVisibility}
                                aria-label="toggle confirm password visibility"
                                edge="end"
                                sx={{ mr: 1 }}
                              >
                                {showConfirmPassword ? (
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

                        {errorstext && (
                          <Typography
                            color="error"
                            variant="body2"
                            sx={{ mt: 1, fontSize: "14px" }}
                          >
                            {errorstext}
                          </Typography>
                        )}
                      </Stack>
                      <Stack spacing={1}>
                        <Button
                          variant="contained"
                          disabled={!isFormValid() || loading}
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
                          onClick={handleSignup}
                        >
                          {loading ? (
                            <CircularProgress
                              size={24}
                              sx={{ color: "white" }}
                            />
                          ) : (
                            //   "Signing Up"
                            "Sign Up"
                          )}
                        </Button>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="p"
                            sx={{ fontFamily: "Montserrat", fontSize: "13px" }}
                          >
                            If Already have account!{" "}
                            <span
                              style={{ fontWeight: 600, cursor: "pointer" }}
                              onClick={() => navigate("/login")}
                            >
                              Log In{" "}
                            </span>
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "820px",
                width: "100%",
                display: { md: "flex", xs: "none" },
              }}
            >
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
