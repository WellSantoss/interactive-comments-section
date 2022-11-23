import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: 'Rubik', sans-serif;
    background-color: hsl(228, 33%, 97%);
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 764px;
  margin: 0 auto;
  padding: 64px 16px;
`;
