import * as S from './signin.styles';

const SignInUI = (pr) => {
  return (
    <>
      <S.BackBt onClick={pr.onClickBack} />
      <S.MainBox onSubmit={pr.handleSubmit(pr.onClickSignIn)}>
        <h1>SignIn</h1>
        <S.SecondBox>
          <S.InputBox placeholder='이메일을 입력하세요.' {...pr.register('email')} />
          <S.Error>{pr.formState.errors.email?.message}</S.Error>
        </S.SecondBox>

        <S.SecondBox>
          <S.InputBox type='password' placeholder='비밀번호를 입력하세요.' {...pr.register('password')} />
          <S.Error>{pr.formState.errors.password?.message}</S.Error>
        </S.SecondBox>
        <S.SignInBt>SignIn</S.SignInBt>
      </S.MainBox>
    </>
  );
};

export default SignInUI;
