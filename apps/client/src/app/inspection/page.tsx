'use client';

import { InspectionPage } from 'client/pageContainer';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Inspection() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // redirect('/auth/signin');
    }
  }, []);

  return <InspectionPage />;
}
