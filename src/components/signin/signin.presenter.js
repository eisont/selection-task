import * as S from './signin.styles';

const SignInUI = (pr) => {
  return (
    <S.MainBox>
      <S.InputBox placeholder='이메일을 입력하세요.' onChange={pr.onChangeEmail} />
      <S.InputBox placeholder='비밀번호를 입력하세요.' onChange={pr.onChangePassword} />
      <S.SignInBt onClick={pr.onClickSignIn}>SignIn</S.SignInBt>
    </S.MainBox>
  );
};

export default SignInUI;
