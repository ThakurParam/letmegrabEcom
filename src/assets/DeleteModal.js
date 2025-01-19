import { Backdrop, Box, Button, Dialog, Typography } from "@mui/material";
import React from "react";

export default function DeleteModal({
  open,
  handleClose,
  handleConfirmDelete,
}) {
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

              width: "300px",
              borderRadius: "20px",
            },
          }}
        >
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              variant="p"
              sx={{
                fontSize: "22px",
                fontFamily: "Montserrat",
                fontWeight: 600,
              }}
            >
              Are you surely want to Delete?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                my: 4,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "green",
                  fontFamily: "Montserrat",
                  fontSize: "17px",
                  borderRadius: "17px",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                {" "}
                No
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "red",
                  fontFamily: "Montserrat",
                  fontSize: "17px",
                  borderRadius: "17px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onClick={handleConfirmDelete}
              >
                {" "}
                Yes
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}
