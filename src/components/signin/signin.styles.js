import styled from '@emotion/styled';

export const MainBox = styled.div`
  width: 100%;
  height: 100vh;

  font-size: 25px;
  font-weight: 900;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 300px;
  height: 40px;

  margin: 20px;
`;

export const SignInBt = styled.div`
  width: 150px;
  height: 40px;

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
