'use client';

import { UserPage } from 'client/pageContainer';

interface UserPageProps {
  params: { userId: number };
}

export default async function User({ params: { userId } }: UserPageProps) {
  return (
    <div>
      <UserPage userId={userId} />
    </div>
  );
}
