'use client';

import React, { useEffect } from 'react';
import { GamePage } from 'client/pageContainer';
import { redirect } from 'next/navigation';

export default function Game() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // redirect('/auth/signin');
    }
  }, []);

  return <GamePage />;
}
