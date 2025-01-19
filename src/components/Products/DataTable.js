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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Section from "../../common/Section";
import { Delete, Update, Visibility } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductModal from "../../assets/ProductModal";
import DeleteModal from "../../assets/DeleteModal";

export default function DataTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
          console.log("Item deleted successfully!");
        } else {
          console.error("Failed to delete the item.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      handleClose();
    }
  };
  return (
    <>
      <Section>
        <Box>
          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              margin: "auto",
              mt: 4,
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
                {products.map((row) => (
                  <TableRow>
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
                          <Update sx={{ cursor: "pointer" }} />
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
    </>
  );
}
