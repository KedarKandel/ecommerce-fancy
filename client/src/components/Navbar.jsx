import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDown from "@mui/icons-material/ArrowDropDown";
import Cart from "@mui/icons-material/AddShoppingCartOutlined";
import { Badge } from "@mui/material";

import { mobiles, tablets } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobiles({height:"70px"})}
`;
const Wrapper = styled.div`
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobiles({padding:"12px 15px"})}
 
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;
const Language = styled.span`
  font-size: 15px;
  ${mobiles({fontSize:"10px"})}
  ${tablets({marginLeft:"-5px"})} 
`;

const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgrey;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  height: 25px;
  outline: none;
  ${mobiles({width:"50px", marginLeft:"-5px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobiles({fontSize:"20px", marginLeft: "5px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;
const MenuItem = styled.div`
  cursor: pointer;
  font-size: 18px;
  margin-left: 30px;
  color: black;
  ${mobiles({fontSize:"15px", marginLeft:"5px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <ArrowDown />
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ color: "gray", fontSize: 17 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Kk & Shop.</Logo>
        </Center>
        <Right>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <Cart style={{ fontSize: 30 }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
