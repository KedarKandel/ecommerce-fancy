import styled from "styled-components";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";


const Container = styled.div``;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
