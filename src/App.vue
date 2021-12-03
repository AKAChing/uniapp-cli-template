<script>
export default {
  async onLaunch() {
    await this.$store.dispatch('setProvider')
    await this.$store.dispatch('setSystemInfo')
    await this.$store.dispatch('setLogin')
    // 更新提示
    // #ifdef MP-ALIPAY
    const updateManager = dd.getUpdateManager()
    updateManager.onUpdateReady(() => {
      uni.showModal({
        title: '更新提示',
        content: '发现新版本，需要重启小程序!',
        showCancel: false,
        confirmText: '确定',
        success: (res) => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        },
      })
    })
    // #endif
  },
}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import './style/animate.scss';
@import './static/fonts/index.css';
@import './style/common.scss';
</style>