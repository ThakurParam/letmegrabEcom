import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Section from "../../common/Section";
import { Delete, Search, Update, Visibility } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductModal from "../../assets/ProductModal";
import DeleteModal from "../../assets/DeleteModal";
import { enqueueSnackbar } from "notistack";
import UpdateModal from "../../assets/UpdateModal";

export default function DataTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://fakestoreapi.com/products/categories"),
        ]);
        setProducts(productsResponse.data);
        setFilteredProducts(productsResponse.data);
        setCategories(["All", ...categoriesResponse.data]);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  const handleViewClick = async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProductData(null);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleUpdateClick = (id) => {
    setSelectedIds(id);
    setModalOpen(true);
  };

  const handleCloseModals = () => {
    setModalOpen(false);
    setSelectedIds(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedId) {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${selectedId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          enqueueSnackbar("Item deleted successfully!", { variant: "success" });
        } else {
          enqueueSnackbar("Failed to delete the item.", { variant: "error" });
        }
      } catch (error) {
        console.error("Error:", error);
      }
      handleClose();
    }
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "Montserrat",
          mb: 5,
          fontWeight: 600,
        }}
      >
        Find Your Best Match Products
      </Typography>
      <Section>
        <Box>
          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              margin: "auto",
              //   mt: 4,
              borderRadius: "18px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              p: 1,
              ".tableHead": {
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "17px",
                whiteSpace: "nowrap",
              },
              ".tablecell": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { md: "row", xs: "column" },
                my: 1,
                p: 2,
                gap: 2,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { md: "45%", xs: "90%" },
                }}
              >
                <Search
                  style={{
                    position: "absolute",
                    right: "0px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search your term here..."
                  style={{
                    paddingLeft: "40px",
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "2px solid grey",
                    outline: "none",
                  }}
                />
              </Box>
              <FormControl
                sx={{
                  width: { md: "45%", xs: "97%" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    height: "38px",
                  },
                }}
              >
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  label="Category"
                  sx={{ height: "30px" }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tableHead">Sr.No</TableCell>
                  <TableCell className="tableHead">Product Title</TableCell>
                  <TableCell className="tableHead">Product Price</TableCell>
                  <TableCell className="tableHead">
                    Product Description
                  </TableCell>
                  <TableCell className="tableHead">Product Category</TableCell>
                  <TableCell className="tableHead">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts?.slice(0, visibleProducts).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tablecell">{row.id}</TableCell>
                    <TableCell className="tablecell">{row.title}</TableCell>
                    <TableCell className="tablecell">{row.price}</TableCell>
                    <TableCell className="tablecell">
                      {truncateText(row.description, 30)}
                    </TableCell>
                    <TableCell className="tablecell">{row.category}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Tooltip title="View" placement="top">
                          <Visibility
                            sx={{ cursor: "pointer" }}
                            onClick={() => handleViewClick(row.id)}
                          />
                        </Tooltip>
                        <Tooltip title="Delete" placement="top">
                          <Delete
                            sx={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleDeleteClick(row.id)}
                          />
                        </Tooltip>
                        <Tooltip title="Update" placement="top">
                          <Update
                            sx={{ cursor: "pointer", color: "green" }}
                            onClick={() => handleUpdateClick(row.id)}
                          />
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ textAlign: "center", my: 2 }}>
            {visibleProducts < filteredProducts.length ? (
              <Button
                variant="contained"
                onClick={() => setVisibleProducts(filteredProducts.length)}
                sx={{
                  padding: "8px 20px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                View More
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => setVisibleProducts(10)}
                sx={{
                  padding: "8px 20px",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                View Less
              </Button>
            )}
          </Box>
        </Box>
      </Section>
      <ProductModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        productData={productData}
      />
      <DeleteModal
        open={open}
        handleClose={handleClose}
        handleConfirmDelete={handleConfirmDelete}
      />
      <UpdateModal
        open={modalOpen}
        handleClose={handleCloseModals}
        id={selectedIds}
      />
    </>
  );
}
