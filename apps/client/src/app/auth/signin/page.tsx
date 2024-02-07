'use client';
import { authUrl } from 'api/client';
import { API } from 'api/client/API';
import { SiginPage } from 'client/pageContainer';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Signin() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;
    (async () => {
      const {
        data: { accessToken, expiresAt },
      } = await API.get(authUrl.getAuth(code));
      document.cookie = `accessToken=${accessToken}`;
      document.cookie = `expiresAt=${expiresAt}`;
      router.push('/');
    })();
  }, []);

  return (
    <div>
      <SiginPage />
    </div>
  );
}
