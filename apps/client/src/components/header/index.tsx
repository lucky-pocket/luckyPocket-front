'use client';
import * as S from './style';
import Link from 'next/link';
import { LogoIcon, AlarmIcon, Norigae, HeaderBackground } from 'client/assets';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { AlarmModal } from '..';
import { API } from 'api/client/API';
import { authUrl, userMyNoticeUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface noticeType {
  id: string;
  kind: string;
  pocketId: number;
  checked: boolean;
  createdAt: string;
}

const Header = ({ hasNorigae }: { hasNorigae?: boolean }) => {
  const getNotice = async () => {
    const response = await API.get(userMyNoticeUrl.getNotice());
    return response.data;
  };

  const { data } = useQuery(['getNotice'], () => getNotice());

  const pathname = usePathname();
  const [alarmClicked, setAlarmClicked] = useState<boolean>(false);
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
              alarm={
                data?.notices?.filter((item: noticeType) => !item.checked)
                  .length !== 0
              }
            />
          </S.Alarm>
          <div>로그아웃</div>
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
