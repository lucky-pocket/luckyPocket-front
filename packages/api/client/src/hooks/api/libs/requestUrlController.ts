export const pocketUrl = {
  postPocket: () => '/pocket',
  getPocketList: () => '/pocket',
  deleteMyMentorData: () => '/mentor/my',
  getMyPocketList: () => '/pockets',
};

export const authUrl = {
  getAuth: (code: string) => `/auth/gauth?code=${code}`,
  postLogout: () => '/auth/logout',
  postRefresh: () => '/auth/refresh',
};
