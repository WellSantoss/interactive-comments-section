import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400;500;700&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    background-color: hsl(228, 33%, 97%);
  }

  body, button, input {
    font-family: 'Rubik', sans-serif;
    color: hsl(211, 10%, 45%);
    font-size: 1rem;
  }

  button {
    border: none;
    background: none;
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
  display: grid;
  gap: 20px;
`;
