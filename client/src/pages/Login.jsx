import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 400px;
background-color: wheat;
display: flex;
align-content: center;
flex-direction: column;

`;
const Title = styled.h1`

`;
const Form = styled.form`
display: flex;
flex-direction: column;
width: 60%;
`;
const Link = styled.a`

`;
const Input = styled.input`

`;
const Button = styled.button`

`
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input Placeholder="Username"></Input>
          <Input Placeholder="Password"></Input>
          <Button>LOGIN</Button>
          <Link>Don,t you remember your password ?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
