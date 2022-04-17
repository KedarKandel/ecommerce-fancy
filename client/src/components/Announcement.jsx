import styled from "styled-components"

const Container = styled.div`
height: 30px;
font-size: 14px;
font-weight: 500;
background-color: #008e89;
display: flex;
justify-content: center;
align-items: center;
color: white;
`



const Announcement = () => {
  return (
    <Container>Super deals awaits you! Free shipping on Orders over €100 and more.</Container>
  )
}

export default Announcement