var feed = new Instafeed({
  get: 'user', useHttp: true,
  userId: '2245150555',
  clientId: '3a75b04c064b4481a485d7fc549a59b9',
  accessToken: '2245150555.1677ed0.aa8cdfc7e2934a7c983c84450cd1d662',
  sortBy: 'most-recent',
  limit: '100'
});
  feed.run();
