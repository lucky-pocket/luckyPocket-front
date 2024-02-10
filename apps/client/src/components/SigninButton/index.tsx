'use client';
import * as S from './style';
import { SigninIcon } from 'client/assets';

const SigninButton = () => {
  return (
    <S.SigninButton>
      <SigninIcon />
      <S.Title
        onClick={() =>
          (window.location.href = `https://gauth.co.kr/login?client_id=${
            process.env.NEXT_PUBLIC_GAUTH_CLIENT_ID ?? ''
          }&redirect_uri=https://www.lucky-pocket.site/auth/signin`)
        }
      >
        시작하기
      </S.Title>
    </S.SigninButton>
  );
};

export default SigninButton;
