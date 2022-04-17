import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCart from "@mui/icons-material/AddShoppingCartOutlined";


const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  opacity: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all .6s ease;
`;

const Container = styled.div`
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 15px;
  position: relative;
  &:hover ${Info}{
 opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  display: flex;
  margin: 15px;
  cursor: pointer;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <AddShoppingCart style={{ fontSize: "30px", color:"red" }} />
        </Icon>
        <Icon>
          <SearchOutlinedIcon style={{ fontSize: "30px", color:"red"}} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon style={{ fontSize: "30px", color:"red" }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
