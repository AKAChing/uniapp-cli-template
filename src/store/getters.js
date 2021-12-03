const getters = {
  // app
  platform: state => state.app.platform,
  provider: state => state.app.provider,

  // user
  userInfo: state => state.user.userInfo,
  
}
export default getters
