<!--  -->
<template>
  <view class="skeleton-wrapper">
    <view class="skeleton-item skeleton-item-lg"></view>
    <view class="skeleton-item skeleton-item-sm"></view>
    <view class="skeleton-item skeleton-item-md"></view>
    <view class="skeleton-item skeleton-item-md"></view>
    <view class="skeleton-item skeleton-item-md"></view>
  </view>
</template>

<script>
export default {
  name: 'aka-skeleton',
}
</script>

<style lang='scss' scoped>
.skeleton-wrapper {
  .skeleton-item {
    width: 100%;
    height: 200rpx;
    border-radius: 10rpx;
    margin-bottom: 20rpx;
    background-color: #eaeaea;
    animation: loading 3s ease infinite;
    background-image: linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e3e3e3 37%,
      #f0f0f0 63%
    );
    background-size: 400% 100%;
  }
  .skeleton-item-sm {
    height: 100rpx;
  }
  .skeleton-item-md {
    height: 200rpx;
  }
  .skeleton-item-lg {
    height: 400rpx;
  }
}

@-webkit-keyframes loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}
</style>