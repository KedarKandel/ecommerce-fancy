import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";


const Container = styled.div``;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/carts" element={<Cart />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
