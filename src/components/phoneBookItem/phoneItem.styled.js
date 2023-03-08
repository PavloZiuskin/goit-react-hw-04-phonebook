import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
  justify-content: space-between;
  button {
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover,
  button:focus {
    background-color: blue;
    color: white;
  }
`;
