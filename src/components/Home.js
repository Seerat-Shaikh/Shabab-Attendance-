import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Sub>
            <img
              src="../logo.png"
              width="200px"
              height="200px"
              position="relative"
            ></img>
            <h1>
              Shabab <span>Al</span> Burhan
            </h1>
          </Sub>
        </HeaderContainer>
      </Header>

      <Content>
        <h1>
          <span
            style={{
              margin: "0 6px",
              background: "linear-gradient(to top, #53a8b6, #6c5b7c",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Welcome!
          </span>{" "}
        </h1>
       
        <p>
        We believe in the power of education
        </p>
        <p>
        all in accordance with the
        teachings of Islam.
       </p>

       <h3><span style={{ fontStyle: "italic" }}>Do you want to Login or Signup?</span></h3>

       <BottomButton>
            <Buttons>
              <LinkStyle to="/login">
                <Button>Login</Button>
              </LinkStyle>
              <LinkStyle to="/signup">
                <Button>Signup</Button>
              </LinkStyle>
            </Buttons>
        </BottomButton>

      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fff, #bce6ff, #6c5b7c);
  background-size: 200% 100%;
  overflow: hidden;
`;

const Header = styled.header`
  width: 100vw;
  height: 5rem;
  padding: 1rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

// sub header
const Sub = styled.div`
  display: flex;
  align-items: center;
  margin-top: -4rem;
  margin-left: -1rem;

  h1 {
    font-size: 2rem;
    color: #6c5b7c;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-left: -1rem;

    span {
      color: #2d82b5;
    }
  }

  @media screen and (max-width: 400px) {
    margin-top: -2rem;

    h1 {
      font-size: 1.4rem;
      margin-left: 2rem;
    }

    img {
      width: 120px;
      height: 120px;
    }
  }
`;

const ButtonContainer = styled.div`
  @media screen and (max-width: 400px) {
    margin-right: 1rem;
    margin-top: 3rem;
  }
`;

const BottomButton = styled.div`
  @media screen and (max-width: 400px) {
    margin-right: 1rem;
    margin-top: 3rem;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none; 
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-item: center;
    width: 100%;
  }
`;

const Button = styled.div`
  width: 7rem;
  padding: 12px 10px;
  border-radius: 25px;
  //background-color: #2d82b5;
  background-color: #53a8b6;
  color: #ffff;
  border: none;
  font-size: 20px;
  box-shadow: 3px 0px 15px rgba(108, 91, 124, 1);
  margin-right: 0.8rem;
  align-items: center;
  justify-content: center;
  text-align: center;

   
  &:hover {
    cursor: pointer;
    background-color: #a2a8d3;
    color: white;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  h1 {
    font-size: 7rem;
    color: #6c5b7c;
    font-family: "Dancing Script";
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: -4rem;
  }

  h3 {
    //font-family: "Noto Serif";
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 2rem;
    margin-top: 1rem;
    color: #24527a;
  }

  p {
    font-family: sans-serif;
    font-size: 20px;
    line-height: 1rem;
    margin-top: 0.1rem;
    color: #24527a;
  }

  @media screen and (max-width: 400px) {
    margin-top: 7rem;

    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 20px;
      margin-left: 1rem;
      margin-bottom: 4rem;
    }

    p {
      font-size: 15px;
      padding: 1rem;
      margin-top: -2rem;
      text-align: center;
    }
  }
`;

export default Home