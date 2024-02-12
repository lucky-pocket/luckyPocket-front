'use client';

import React, { useEffect } from 'react';
import { GamePage } from 'client/pageContainer';
import { redirect } from 'next/navigation';

export default function Game() {
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

  return <GamePage />;
}
