'use client';

import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { UserPage } from 'client/pageContainer';

interface UserPageProps {
  params: { userId: number };
}

export default async function User({ params: { userId } }: UserPageProps) {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      redirect('/auth/signin');
    } else {
      const status = 401;
      if (status === 401) {
        redirect('/auth/signin');
      }
    }
  }, []);
  return (
    <div>
      <UserPage userId={userId} />
    </div>
  );
}
