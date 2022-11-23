import styled, { keyframes } from 'styled-components';

export default function Loading() {
  return <StyledLoading />;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg); 
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-right-color: #5358b6;
  animation: ${rotate} 1.5s linear infinite;
`;
