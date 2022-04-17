import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
