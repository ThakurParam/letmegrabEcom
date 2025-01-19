import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Dialog,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ProductModal({ open, handleClose, productData }) {
  return (
    <>
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
          BackdropProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
            },
          }}
          sx={{
            "& .MuiDialog-paper": {
              margin: "auto",

              width: "600px",
              borderRadius: "20px",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Product Details
              </Typography>
              <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
            </Box>
            <Divider sx={{ bgcolor: "black", my: 1 }} />
            <Box my={3}>
              <Stack spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box sx={{ height: "250px", width: "250px" }}>
                    <img
                      src={productData?.image}
                      alt="product-image"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "19px",
                        fontWeight: 600,
                      }}
                    >
                      {productData?.title}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "25px",
                        fontWeight: 600,
                      }}
                    >
                      $ {productData?.price}
                    </Typography>
                  </Box>
                </Box>
                <Stack
                  //   spacing={2}
                  sx={{
                    ".tittle": {
                      fontWeight: 600,
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                    },
                    ".detail": {
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      color: "grey",
                    },
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Typography variant="p" className="tittle">
                        Description
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="p" className="detail">
                        {productData?.description}{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} mt={1}>
                      <Typography variant="p" className="tittle">
                        Category
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="p" className="detail">
                        {productData?.category}{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} mt={1}>
                      <Typography variant="p" className="tittle">
                        Rating
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="p" className="detail">
                        {productData?.rating?.rate} /{" "}
                        {productData?.rating?.count}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}
