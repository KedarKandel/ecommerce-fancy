import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
width: 100%;
text-align: center;
`
const Products = () => {
  return (
    <Container>
      <Title>Products</Title>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
