import styled from 'styled-components';

export const FormSt = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
  width: 400px;

  button {
    width: 120px;
    height: 30px;
    cursor: pointer;
  }
  button:hover,
  button:focus {
    background-color: blue;
    color: white;
  }
`;
export const Label = styled.label`
  display: flex;
  gap: 4px;
  flex-direction: column;
  cursor: pointer;
  input {
    width: 50%;
    height: 35px;
  }
`;
