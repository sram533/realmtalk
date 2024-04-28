import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hello from "../assets/hello-gojo-satoru.gif"
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Hello} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 15rem;
    width: 25rem; 
    margin-bottom: 2rem;
    transition: box-shadow 0.3s ease;
  }
  img:hover {
    box-shadow: 0px 0px 20px rgba(78, 14, 255, 0.5);
  }
  span {
    color: #4e0eff;
  }
  span:hover {
    box-shadow: 0px 0px 20px rgba(78, 14, 255, 0.5);
  }
`;
