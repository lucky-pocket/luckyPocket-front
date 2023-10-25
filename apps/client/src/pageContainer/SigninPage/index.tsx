"use client";

import * as S from "./style";
import { SigninButton } from "client/components";

export default function Siginin() {
  return (
    <S.Signin>
      <S.Background>
        <SigninButton />
      </S.Background>
    </S.Signin>
  );
}
