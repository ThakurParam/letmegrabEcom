import { Close, UploadFile } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

export default function UpdateModal({ open, handleClose, id }) {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (id && open) {
      fetchProductDetails();
    }
  }, [id, open]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const { title, description, category, price, image } = response.data;
      setFormData({ title, description, category, price, image });
      setImage(image);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  const handleUpdate = async () => {
    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        price: parseFloat(formData.price),
        image: formData.image || "https://i.pravatar.cc",
      };

      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        payload
      );

      window.alert(
        `Product Updated Successfully:\n\nTitle: ${payload.title}\nDescription: ${payload.description}\nCategory: ${payload.category}\nPrice: $${payload.price}\nImage URL: ${payload.image}`
      );

      enqueueSnackbar("Product updated successfully!", {
        variant: "success",
      });

      handleClose();
    } catch (error) {
      console.error("Error updating the product:", error);
      enqueueSnackbar("Failed to update the product.", {
        variant: "error",
      });
    }
  };

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
              width: "800px !important",
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
                variant="p"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "17px",
                  fontWeight: 600,
                }}
              >
                Update Your Item
              </Typography>
              <Close
                sx={{ cursor: "pointer", color: "black" }}
                onClick={handleClose}
              />
            </Box>
            <Divider sx={{ bgcolor: "black" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{ height: "250px", width: "250px", position: "relative" }}
              >
                <img
                  alt="product-image"
                  src={image || ""}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <IconButton
                  component="label"
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "white",
                    boxShadow: 1,
                  }}
                >
                  <UploadFile />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                ".heading": {
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontWeight: 600,
                },
                ".input": {
                  border: "1px solid grey",
                  pl: 1,
                  borderRadius: "10px",
                  py: 0.5,
                },
              }}
            >
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="p" className="heading">
                    Title
                  </Typography>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    disableUnderline={true}
                    placeholder="Enter your title here...."
                    className="input"
                  />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="p" className="heading">
                    Description
                  </Typography>
                  <Input
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    disableUnderline={true}
                    placeholder="Enter your description here...."
                    className="input"
                  />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="p" className="heading">
                    Category
                  </Typography>
                  <Input
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    disableUnderline={true}
                    placeholder="Enter your category here...."
                    className="input"
                  />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="p" className="heading">
                    Price
                  </Typography>
                  <Input
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    disableUnderline={true}
                    placeholder="Enter your price here...."
                    className="input"
                  />
                </Stack>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  my: 4,
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleUpdate}
                  sx={{
                    fontFamily: "Montserrat",
                    textTransform: "none",
                    borderRadius: "10px",
                    bgcolor: "black",
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}
