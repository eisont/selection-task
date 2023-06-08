import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import fetchJson from '@/src/commons/api';
import SignUpUI from './signup.presenter';
import { useRouter } from 'next/router';

const schema = yup.object({
  email: yup.string().email().required('이메일은 필수 항목입니다.'),
  password: yup.string().min(8).required('비밀번호는 필수 항목입니다.'),
});

const SignUp = () => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickSignUp = (data) => {
    const InfoData = {
      email: data?.email,
      password: data?.password,
    };

    fetchJson({
      apiEndpoint: '/auth/signup',
      body: InfoData,
    }).then((json) => {
      if (Math.floor(json?.statusCode / 100) % 10 === 4) {
        alert(json.message);
      } else {
        alert('회원가입을 축하합니다.');
        router.push('/signin');
      }
    });
  };

  return <SignUpUI onClickBack={onClickBack} register={register} handleSubmit={handleSubmit} formState={formState} onClickSignUp={onClickSignUp} />;
};

export default SignUp;
