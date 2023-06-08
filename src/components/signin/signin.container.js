import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SignInUI from './signin.presenter';
import fetchJson from '@/src/commons/api';
import { useRouter } from 'next/router';

const schema = yup.object({
  email: yup.string().email().required('이메일은 필수 항목입니다.'),
  password: yup.string().min(8).required('비밀번호는 필수 항목입니다.'),
});

const SignIn = () => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickSignIn = (data) => {
    const InfoData = {
      email: data?.email,
      password: data?.password,
    };

    fetchJson({
      apiEndpoint: '/auth/signin',
      body: InfoData,
    }).then((json) => {
      if (Math.floor(json?.statusCode / 100) % 10 === 4) {
        if (json.message === 'Unauthorized') {
          alert('비밀번호 확인해주세요.');
        } else {
          alert(json.message);
        }
      } else {
        if (json.access_token) {
          alert('로그인 성공');
        }
      }
    });
  };

  return <SignInUI onClickBack={onClickBack} register={register} handleSubmit={handleSubmit} formState={formState} onClickSignIn={onClickSignIn} />;
};

export default SignIn;
