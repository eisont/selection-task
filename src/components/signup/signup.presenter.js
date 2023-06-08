import * as S from './signup.styles';

const SignUpUI = (pr) => {
  return (
    <>
      <S.BackBt onClick={pr.onClickBack} />
      <S.MainBox onSubmit={pr.handleSubmit(pr.onClickSignUp)}>
        <h1>SignUp</h1>
        <S.SecondBox>
          <S.InputBox placeholder='이메일을 입력하세요.' {...pr.register('email')} />
          <S.Error>{pr.formState.errors.email?.message}</S.Error>
        </S.SecondBox>

        <S.SecondBox>
          <S.InputBox type='password' placeholder='비밀번호를 입력하세요.' {...pr.register('password')} />
          <S.Error>{pr.formState.errors.password?.message}</S.Error>
        </S.SecondBox>

        <S.SignUpBt>SignUp</S.SignUpBt>
      </S.MainBox>
    </>
  );
};

export default SignUpUI;
