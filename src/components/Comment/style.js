import styled from 'styled-components';

export const CommentHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  align-items: center;
  justify-items: end;
  gap: 16px;
  margin-bottom: 20px;

  & > img {
    width: 32px;
    height: 32px;
  }

  strong {
    /* font-weight: 500; */
    color: hsl(212, 24%, 26%);
  }

  button {
    color: hsl(238, 40%, 52%);
    font-weight: 700;
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    transition: filter 0.1s;

    &:hover {
      filter: opacity(0.3);
    }
  }
`;

export const CommentScore = styled.div`
  background-color: hsl(228, 33%, 97%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;

  button {
    width: 11px;
    height: 11px;
  }

  span {
    color: hsl(238, 40%, 52%);
    font-weight: 700;
  }
`;

export const CommentWrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  display: grid;
  grid-template-columns: minmax(40px, auto) 1fr;
  align-items: start;
  gap: 24px;
`;
