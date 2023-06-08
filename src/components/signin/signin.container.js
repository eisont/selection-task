import { useState } from 'react';
import SignInUI from './signin.presenter';
import fetchJson from '@/src/commons/api';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignIn = () => {
    const InfoData = {
      email,
      password,
    };

    console.log(InfoData);

    fetchJson({
      apiEndpoint: '/auth/signin',
      body: InfoData,
    }).then((json) => {
      alert(JSON.stringify(json));
    });
  };

  return <SignInUI onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} onClickSignIn={onClickSignIn} />;
};

export default SignIn;
