import * as React from "react";

import styled from "styled-components";

const SChart = styled.div`
  margin: auto;
  border-radius: 10px;
  max-width: 100%;
  padding: 100px;
  color: black;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding-top: 1rem;
    padding: 0px;
    img {
      margin: 0 auto;
      max-width: 80%;
    }
  }
`;

const Chart = ({ children }) => {
  return (
    <SChart>
      <h1>Sarah's List For The Week</h1>
      <h2>April 25th 2022</h2>
      <i>I'm gay so I'm right.</i>
      <br />
      {children}
    </SChart>
  );
};

export default Chart;
