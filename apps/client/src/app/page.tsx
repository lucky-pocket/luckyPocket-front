'use client';

import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { MainPage } from 'client/pageContainer';

export default function Main() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      redirect('/auth/signin');
    }
  }, []);
  return <MainPage />;
}
