<!--  -->
<template>
  <view
    class='aka-load-more'
    :style="{ 'color': params.color, 'fontSize': params.fontSize + 'rpx' }"
  >
    <slot v-if="params.empty">
      <view class="aka-load-more-empty">
        <image
          class="aka-load-more-empty-img"
          src="@/static/empty_icon.png"
          mode="widthFix"
        />
        {{ params.emptyText }}
      </view>
    </slot>

    <view
      class="aka-load-more-other"
      v-else
    >
      <view
        class="aka-load-more-other-no-more"
        v-if="params.noMore"
      >
        <template v-if="params.showNoMore">
          <view class="aka-load-more-other-no-more-wrapper">
            <view
              class="aka-load-more-other-no-more-wrapper-line"
              :style="{ 'background-color': params.color }"
            ></view>
            <view class="aka-load-more-other-no-more-wrapper-text">{{ params.noMoreText }}</view>
            <view
              class="aka-load-more-other-no-more-wrapper-line"
              :style="{ 'background-color': params.color }"
            ></view>
          </view>
        </template>
        <template v-else></template>
      </view>
      <view
        class="aka-load-more-other-loading"
        v-else
      >
        <u-loading
          class="aka-load-more-other-loading-component"
          :mode="params.loadingIconType"
          :size="params.loadingIconSize"
          :color="params.color"
        ></u-loading>
        {{ params.loadingText }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'aka-load-more',
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  data() {
    return {
      tabIndex: 0,
    }
  },
  computed: {
    params() {
      return Object.assign(
        {
          loadingText: '加载中...',
          empty: false,
          emptyText: '暂无数据',
          noMore: false,
          noMoreText: '没有更多了',
          showNoMore: true,
          color: '#666',
          fontSize: '26',
          loadingIconType: 'flower', // circle flower
          loadingIconSize: '32',
        },
        this.config
      )
    },
  },

  methods: {},
}
</script>

<style lang='scss' scoped>
.aka-load-more {
  &-empty {
    padding-top: 100rpx;
    padding-bottom: 100rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-img {
      width: 300rpx;
      height: 300rpx;
      display: block;
      margin-bottom: 50rpx;
    }
  }
  &-other {
    display: flex;
    justify-content: center;
    align-items: center;
    &-no-more {
      &-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        &-line {
          width: 20rpx;
          height: 1rpx;
        }
        &-text {
          margin: 0 8rpx;
        }
      }
    }
    &-loading {
      /deep/.u-loading {
        margin-right: 12rpx;
      }
    }
  }
}
</style>