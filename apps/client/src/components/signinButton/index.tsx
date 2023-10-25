"use client";
import * as S from "./style";
import { SigninIcon } from "client/assets";

const SigninButton = () => {
  return (
    <S.SigninButton>
      <SigninIcon />
      <S.Title>시작하기</S.Title>
    </S.SigninButton>
  );
};

export default SigninButton;
