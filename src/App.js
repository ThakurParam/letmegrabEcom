import HomePage from "./components/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/Login";
import SignUp from "./assets/SignUp";
import { SnackbarProvider } from "notistack";
import Product from "./components/Products/Product";

function App() {
  return (
    <>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/our-product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}

export default App;
