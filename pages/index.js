import Head from 'next/head';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const CenterBox = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MB = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin: 20px;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const Home = () => {
  const router = useRouter();

  const onClickLogin = () => {
    router.push('./signin');
  };
  const onClickSignup = () => {
    router.push('./signup');
  };
  const onClickTodo = () => {
    router.push('./todo');
  };

  return (
    <>
      <Head>
        <title>프리온보딩 인턴십</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CenterBox>
        <MB onClick={onClickLogin}>로그인</MB>
        <MB onClick={onClickSignup}>회원가입</MB>
        <MB onClick={onClickTodo}>todo</MB>
      </CenterBox>
    </>
  );
};

export default Home;
