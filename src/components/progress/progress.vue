<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar js_progress"
        :style="{transform: `scaleX(${percent/100})`}"
      ></div>
    </div>
    <span v-if="showClear" class="weui-progress__opr">
      <i class="weui-icon-cancel" @click="onCancelClick"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'wv-progress',

    props: {
      percent: {
        type: [Number, String]
      },
      showClear: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      onCancelClick (event) {
        event.preventDefault()
        this.$emit('cancel', this)
      }
    }
  }
</script>

<style scoped lang="scss">
  .weui-progress__inner-bar{
    width: 100%;
    transform-origin: left;
    will-change: transform;
    z-index: 1;
    position: relative; //奇怪了怎么现在z-index还需要,配合定位来生效的捏?
  }
</style>
