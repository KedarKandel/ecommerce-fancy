import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Container = styled.div`
height: 100vh;
width: 100vw;

`

const Home = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Categories/>
    </Container>
  );
};

export default Home;
