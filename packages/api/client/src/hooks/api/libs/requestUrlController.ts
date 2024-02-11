export const pocketUrl = {
  postPocket: () => '/pockets',
  getDetailPocket: (pocket_id: number) => `/pockets/${pocket_id}`,
  getUserSearch: (query: string) => `/users?query=${query}`,
};

export const authUrl = {
  getAuth: (code: string) => `/auth/gauth?code=${code}`,
  postLogout: () => 'auth/logout',
  postRefresh: () => 'auth/refresh',
};

export const userMyUrl = {
  getMyInfo: () => '/users/me',
  getMyCoin: () => '/users/me/coins',
};

export const userMyNoticeUrl = {
  getNotice: () => '/users/me/notices',
  patchNotice: () => `/users/me/notices`,
};

export const userMyPocketUrl = {
  getPocketList: () => '/users/me/pockets',
  postMyPocketName: (pocket_id: number) => `/pockets/${pocket_id}/sender`,
  patchPocketScope: (pocket_id: string) =>
    `/users/me/pockets/${pocket_id}/visibility`,
};

export const userUrl = {
  getUserInfo: (userId: number) => `/users/${userId}`,
  postPocketName: (userId: string, pocket_id: string) =>
    `/users/${userId}/pockets/${pocket_id}/sender`,
  getPocketList: (user_id: number) => `/users/${user_id}/pockets`,
  getRank: (sort: string) => `/users/rank?sortType=${sort}`,
};

export const gameUrl = {
  postYut: () => '/games/yut',
  getFreeTicket: () => '/games/free-ticket',
  getGameCount: () => '/games/count',
};
