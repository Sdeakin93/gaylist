import * as React from "react";

import styled from "styled-components";

const SItem = styled.div`
  background: ${(p) => (p.background ? p.background : "white")};
  display: flex;
  padding: 20px;
  flex-direction: ${(p) => (p.right ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    display: grid;
    img {
      margin: 0 auto;
      max-width: 80%;
    }
  }
`;

const SText = styled.div`
  position: relative;
  max-width: 75%;
  padding-left: ${(p) => (p.right ? "10px" : "90px")};
  padding-right: ${(p) => (p.right ? "90px" : "10px")};
  color: ${(p) => (p.color ? p.color : "black")};
  p {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const SImage = styled.div`
  position: absolute;
  display: contents;
  width: 258px;
  height: 190px;
`;

const SImg = styled.img`
  width: 258px;
  height: 190px;
  :hover { 
    animation: play 0.8s steps(10) infinite;
`;

const Item = ({ image, text, alt, right, title, background, color }) => {
  return (
    <SItem right={right} background={background}>
      {!!image ? (
        <SImage>
          <SImg src={image} alt={alt} />
        </SImage>
      ) : null}
      <SText color={color}>
        <h3>{title}</h3>
        <p>{text}</p>
      </SText>
    </SItem>
  );
};

export default Item;
