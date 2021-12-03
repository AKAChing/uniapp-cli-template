<template>
  <view class="aka-feedback-container">
    <image
      v-if="state === 'success'"
      src="@/static/tips/success.png"
      mode="widthFix"
      class="icon-img"
    />
    <image
      v-if="state === 'pending'"
      src="@/static/tips/pending.png"
      mode="widthFix"
      class="icon-img"
    />
    <image
      v-if="state === 'warning'"
      src="@/static/tips/warning.png"
      mode="widthFix"
      class="icon-img"
    />
    <view class="tips">
      <view
        class="tips-title"
        v-if="title"
      >{{ title }} </view>
      <view
        class="tips-subtitle"
        v-if="subTitle"
      >{{ subTitle }}</view>
    </view>
    <slot>
      <view
        class="btn"
        shape="circle"
        @click="backHome"
      >返回首页</view>
    </slot>
  </view>
</template>

<script>
export default {
  name: 'aka-feedback',
  props: {
    state: {
      type: String,
      default: 'success', // success pending warning
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    backHome() {
      uni.switchTab({
        url: '/pages/takeOrder/index'
      })
    }
  },
  onLoad(options) {
    console.log(options)
  },
}
</script>
<style lang='scss' scoped>
.aka-feedback-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  background: #fff;
  .icon-img {
    width: 162rpx;
    height: 162rpx;
    margin-bottom: 40rpx;
  }
  .tips {
    width: 90vw;
    text-align: center;
    margin-bottom: 100rpx;
    .tips-title {
      font-size: 36rpx;
      font-weight: 500;
      color: #333333;
      margin-bottom: 40rpx;
    }
    .tips-subtitle {
      font-size: 32rpx;
      color: #666;
    }
  }
  .btn {
    width: 70%;
    color: #fff;
    background: #3875f6;
    border-radius: 100rpx;
    padding: 20rpx 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
