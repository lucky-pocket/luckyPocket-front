'use client';

import { SearchPage } from 'client/pageContainer';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Search() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // redirect('/auth/signin');
    }
  }, []);

  return <SearchPage />;
}
