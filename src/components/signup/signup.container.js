import { useState } from 'react';
import fetchJson from '@/src/commons/api';
import SignUpUI from './signup.presenter';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignUp = () => {
    const InfoData = {
      email,
      password,
    };

    console.log(InfoData);

    fetchJson({
      apiEndpoint: '/auth/signup',
      body: InfoData,
    }).then((json) => {
      alert(JSON.stringify(json.message));
    });
  };

  return <SignUpUI onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} onClickSignUp={onClickSignUp} />;
};

export default SignUp;
