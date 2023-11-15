'use client';
import * as S from './style';
import Link from 'next/link';
import { LogoIcon, AlarmIcon, Norigae, HeaderBackground } from 'client/assets';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { AlarmModal } from '..';

const Header = ({ hasNorigae }: { hasNorigae?: boolean }) => {
  const pathname = usePathname();
  const [alarmClicked, setAlarmClicked] = useState<boolean>(false);
  const [isAlarm, setIsAlarm] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setAlarmClicked(false);
    }
  };

  return (
    <S.HeaderContainer>
      <HeaderBackground />
      <S.HeaderWrap>
        <Link href='/'>
          <LogoIcon />
        </Link>
        <S.NavBar>
          <S.NavContent href='/rank' isChecked={pathname === '/rank'}>
            랭킹
          </S.NavContent>
          <S.NavContent href='/game' isChecked={pathname === '/game'}>
            게임
          </S.NavContent>
          <S.Alarm onClick={() => setAlarmClicked((prev) => !prev)}>
            <AlarmIcon
              fill={alarmClicked ? `#1E1D1B` : '#A19E97'}
              alarmClicked={alarmClicked}
              alarm={isAlarm}
            />
          </S.Alarm>
        </S.NavBar>
      </S.HeaderWrap>
      {hasNorigae && <Norigae />}
      {alarmClicked && (
        <AlarmModal modalRef={modalRef} modalOutSideClick={modalOutSideClick} />
      )}
    </S.HeaderContainer>
  );
};

export default Header;
