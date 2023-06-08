import styled from '@emotion/styled';

export const BackBt = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: black;

  position: absolute;
  left: 10%;
  top: 10%;

  &:hover {
    transition: 0.2s;
    cursor: pointer;
    background-color: gray;
  }
`;

export const MainBox = styled.form`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondBox = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 350px;
  height: 40px;
  font-size: 18px;

  ::placeholder {
    font-size: 18px;
  }
`;

export const Error = styled.div`
  font-size: 18px;
  color: red;
`;

export const SignInBt = styled.button`
  width: 150px;
  height: 40px;

  font-size: 20px;
  outline: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #dbdbdb;
  background-color: blue;
  border-radius: 10px;

  &:hover {
    transition: 0.2s;
    cursor: pointer;
    color: #fff;
    font-weight: 900;
    background-color: skyblue;
  }
`;
