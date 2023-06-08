import * as S from './signup.styles';

const SignUpUI = (pr) => {
  return (
    <S.MainBox>
      <S.InputBox placeholder='이메일을 입력하세요.' onChange={pr.onChangeEmail} />
      <S.InputBox placeholder='비밀번호를 입력하세요.' onChange={pr.onChangePassword} />
      <S.SignUpBt onClick={pr.onClickSignUp}>SignUp</S.SignUpBt>
    </S.MainBox>
  );
};

export default SignUpUI;
