'use client';

import { RankPage } from 'client/pageContainer';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Rank() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      redirect('/auth/signin');
    }
  }, []);

  return <RankPage />;
}
