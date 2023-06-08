import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { AccessTokenState } from '../store';
import { useEffect } from 'react';

export const withAuth = (Component) => {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const [accessToken] = useRecoilState(AccessTokenState);

    useEffect(() => {
      if (!accessToken) {
        router.push('./signin');
      }
    }, []);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name})`;

  return WrappedComponent;
};
