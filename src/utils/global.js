import store from '../store'

export default global = {
  alertError(error) {
    console.log('[UTILS/GLOBAL/ALERTERROR]', error)
    let title = `请求出错，请稍后重试`
    if (typeof error === 'string') {
      title = error
    } else {
      if (error.data && error.data.message) {
        title = error.data.message
      } else if (error.message) {
        title = error.message
      } else if (error.errMsg) {
        title = error.message
      }
    }
    uni.showToast({
      icon: 'none',
      title,
      duration: 3000
    })
  },
}