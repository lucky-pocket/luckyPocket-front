'use client';
import { authUrl } from 'api/client';
import { API } from 'api/client/API';
import { SiginPage } from 'client/pageContainer';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Siginin() {
  const searchParams = useSearchParams();
  console.log(searchParams.get('code'));

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;
    (async () => {
      const {
        data: { accessToken, expiresAt },
      } = await API.get(authUrl.getAuth(code));
      console.log(accessToken);
    })();
  }, []);

  return (
    <div>
      <SiginPage />
    </div>
  );
}
