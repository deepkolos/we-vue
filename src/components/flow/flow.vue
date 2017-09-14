<template>
  <div>
    <div class="weui-wepay-flow">
      <div class="weui-wepay-flow__bd">
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state">1</div>
          <p class="weui-wepay-flow__title-bottom">已付款</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_done">
          <div class="weui-wepay-flow__process"></div>
        </div>
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state">2</div>
          <p class="weui-wepay-flow__title-bottom">已发货</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_ing">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-top">进行中</div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state">3</div>
          <p class="weui-wepay-flow__title-bottom">待收货</p>
        </div>
        <div class="weui-wepay-flow__line">
          <div class="weui-wepay-flow__process"></div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state">4</div>
          <p class="weui-wepay-flow__title-bottom">完成</p>
        </div>
      </div>
    </div>

    <div class="weui-wepay-flow weui-wepay-flow_custom">
      <div class="weui-wepay-flow__bd">
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-top">已付款</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_done" style="width: 15%;">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-bottom">进行中</div>
        </div>
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-top">已发货</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_done" style="width: 30%;">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-bottom">进行中</div>
        </div>
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-top">待收货</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_ing" style="width: 45%;">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-bottom">进行中</div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-top">完成</p>
        </div>
      </div>
    </div>

    <div class="weui-wepay-flow">
      <div class="weui-wepay-flow__bd">
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <div class="weui-wepay-flow__title-bottom">
            <div>延误30分钟</div>
          </div>
          <div class="weui-wepay-flow__intro-top">赔*元</div>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_ing">
          <div class="weui-wepay-flow__process"></div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-bottom">延误60分钟</p>
          <div class="weui-wepay-flow__intro-top">赔*元</div>
        </div>
        <div class="weui-wepay-flow__line">
          <div class="weui-wepay-flow__process"></div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-bottom">延误120分钟</p>
          <div class="weui-wepay-flow__intro-top">赔*元</div>
        </div>
      </div>
    </div>

    <div class="weui-wepay-flow weui-wepay-flow_vertical" style="height: 320px;">
      <div class="weui-wepay-flow__bd">
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state">A</div>
          <p class="weui-wepay-flow__title-right">已付款</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_done">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state">B</div>
          <p class="weui-wepay-flow__title-right">已发货</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_ing">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state">C</div>
          <p class="weui-wepay-flow__title-right">待收货</p>
        </div>
        <div class="weui-wepay-flow__line">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state">D</div>
          <p class="weui-wepay-flow__title-right">完成</p>
        </div>
      </div>
    </div>

    <div class="weui-wepay-flow weui-wepay-flow_vertical-custom">
      <div class="weui-wepay-flow__bd">
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-right">发起申请</p>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_done" style="height: 50px;">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-right">已发货</p>
        </div>
        <div class="weui-wepay-flow__line" style="height: 100px;">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state"></div>
          <p class="weui-wepay-flow__title-right">待确认收货</p>
        </div>
        <div class="weui-wepay-flow__line" style="height: 150px;">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li">
          <div class="weui-wepay-flow__state"></div>
          <div class="weui-wepay-flow__title-right">完成</div>
        </div>
      </div>
    </div>

    <div class="weui-wepay-flow weui-wepay-flow_vertical" style="height: 320px;">
      <div class="weui-wepay-flow__bd">
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <div class="weui-wepay-flow__title-left">
            <div class="flow_info_a">起飞时间</div>
          </div>
          <div class="weui-wepay-flow__intro-right">航班未按时起飞</div>
        </div>
        <div class="weui-wepay-flow__line weui-wepay-flow__line_done">
          <div class="weui-wepay-flow__process"></div>
          <div class="weui-wepay-flow__info-left">进行中</div>
        </div>
        <div class="weui-wepay-flow__li weui-wepay-flow__li_done">
          <div class="weui-wepay-flow__state"></div>
          <div class="weui-wepay-flow__title-left">
            <div class="flow_info_a">延误30分</div>
            <p class="flow_info_b">理赔50元</p>
          </div>
          <div class="weui-wepay-flow__intro-right">已获得*元赔偿款</div>
        </div>
        <div class="weui-wepay-flow__line">
          <div class="weui-wepay-flow__process"></div>
        </div>
        <div class="weui-wepay-flow__li">
          <p class="weui-wepay-flow__state"></p>
          <div class="weui-wepay-flow__title-left">
            <div class="flow_info_a">延误60分</div>
            <p class="flow_info_b">理赔*元</p>
          </div>
        </div>
      </div>
    </div>

    <div class="weui-wepay-flow-auto">
      <div class="weui-wepay-flow-auto__bd">
        <div class="weui-wepay-flow-auto__li">
          <div class="weui-wepay-flow-auto__state"></div>
          <div class="weui-wepay-flow-auto__line"></div>
          <p class="weui-wepay-flow-auto__title">完成</p>
        </div>
        <div class="weui-wepay-flow-auto__li">
          <div class="weui-wepay-flow-auto__state"></div>
          <div class="weui-wepay-flow-auto__line"></div>
          <p class="weui-wepay-flow-auto__title">待确认收货</p>
        </div>
        <div class="weui-wepay-flow-auto__li">
          <div class="weui-wepay-flow-auto__state weui-wepay-flow-auto__state_on"></div>
          <div class="weui-wepay-flow-auto__line weui-wepay-flow-auto__line_on"></div>
          <p class="weui-wepay-flow-auto__title">已发货</p>
          <p class="weui-wepay-flow-auto__info">物流单号：顺丰x0123456</p>
          <p class="weui-wepay-flow-auto__info">其它备注：留意...</p>
        </div>
        <div class="weui-wepay-flow-auto__li">
          <div class="weui-wepay-flow-auto__state weui-wepay-flow-auto__state_on"></div>
          <p class="weui-wepay-flow-auto__title">发起申请 2015-03-01</p>
          <p class="weui-wepay-flow-auto__info">订单编号：123456</p>
          <p class="weui-wepay-flow-auto__info">商户名称：某某商户</p>
          <p class="weui-wepay-flow-auto__info">收货地址：深圳市南山区科技中一路</p>
          <p class="weui-wepay-flow-auto__info">物流清单：物品1，物品2</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'wv-flow',

    props: {
      type: {
        type: String,
        default: 'horizontal'
      },
      bubblePosition: {
        type: String,
        default: 'top'
      },
      labelPosition: {
        type: String,
        default: 'bottom'
      }
    },

    data() {
      return {
      }
    },

    watch: {
    },

    methods: {
    }
  }
</script>

<style scoped lang="scss">
  $bubble-color: #ff8a00;

  @mixin setBubbleCommon($height,$backgroundColor,$fontSize,$color,$borderRadius) {
    height: $height;
    line-height: $height;
    background-color: $backgroundColor;
    font-size: $fontSize;
    color: $color;
    white-space: nowrap;
    padding: 0 6px;
    position: relative;
    border-radius: $borderRadius;
    &:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      overflow: hidden;
      font-size: 0;
      position: absolute;
    }
  }

  @mixin setBubblePrivate($direction, $backgroundColor) {
    @if $direction == top {
      &:after {
        border-color: $backgroundColor transparent transparent transparent;
        border-style: solid;
        border-width: 5px 3px;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: -10px;
      }
    }

    @if $direction == bottom {
      &:after {
        border-color: transparent transparent $backgroundColor transparent;
        border-style: dashed dashed solid dashed;
        border-width: 5px 3px;
        left: 50%;
        transform: translate(-50%, 0);
        top: -10px;
      }
    }

    @if $direction == left {
      &:after {
        border-color: transparent transparent transparent $backgroundColor;
        border-style: solid;
        border-width: 3px 5px;
        top: 50%;
        transform: translate(0, -50%);
        right: -10px;
      }
    }

    @if $direction == right {
      &:after {
        border-color: transparent $backgroundColor transparent transparent;
        border-style: solid;
        border-width: 3px 5px;
        top: 50%;
        transform: translate(0, -50%);
        left: -10px;
      }
    }
  }

  .weui-wepay-flow,
  .weui-wepay-flow-auto {
    padding: 40px;
  }

  .weui-wepay-flow__bd {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .weui-wepay-flow__li {
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 1;
    .weui-wepay-flow__state {
      position: absolute;
      left: 0;
      top: 0;
      width: 14px;
      height: 14px;
      font-size: 10px;
      line-height: 14px;
      text-align: center;
      color: #FFF;
      border-radius: 7px;
      box-sizing: border-box;
    }
  }

  .weui-wepay-flow__state {
    background-color: #E2E2E2;
    .weui-wepay-flow__li_done & {
      background-color: #09bb07;
    }
  }

  [class^="weui-wepay-flow__title-"], [class*=" weui-wepay-flow__title-"] {
    position: absolute;
    color: #999999;
    font-size: 14px;
    font-weight: normal;
    white-space: nowrap;
    text-align: center;
  }

  .weui-wepay-flow__title-top {
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    .weui-wepay-flow__li_done & {
      color: #333;
    }
  }

  .weui-wepay-flow__title-bottom {
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    .weui-wepay-flow__li_done & {
      color: #333;
    }
  }

  .weui-wepay-flow__title-left {
    right: 30px;
    top: 50%;
    transform: translate(0, -50%);
    .weui-wepay-flow__li_done & {
      color: #333;
    }
    text-align: right;
  }

  .weui-wepay-flow__title-right {
    left: 30px;
    top: 50%;
    transform: translate(0, -50%);
    text-align: left;
    .weui-wepay-flow__li_done & {
      color: #333;
    }
  }

  [class^="weui-wepay-flow__intro-"], [class*=" weui-wepay-flow__intro-"] {
    @include setBubbleCommon(20px, $bubble-color, 10px, #FFF, 4px);
  }

  .weui-wepay-flow__intro-top {
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, 0);
    @include setBubblePrivate(top, $bubble-color);
    position: absolute;
  }

  .weui-wepay-flow__intro-bottom {
    top: 25px;
    left: 50%;
    transform: translate(-50%, 0);
    @include setBubblePrivate(bottom, $bubble-color);
    position: absolute;
  }

  .weui-wepay-flow__intro-right {
    left: 36px;
    top: 50%;
    transform: translate(0, -50%);
    @include setBubblePrivate(right, $bubble-color);
    position: absolute;
  }

  .weui-wepay-flow__intro-left {
    right: 36px;
    top: 50%;
    transform: translate(0, -50%);
    @include setBubblePrivate(left, $bubble-color);
    position: absolute;
  }

  [class^="weui-wepay-flow__info-"] {
    @include setBubbleCommon(14px, #09bb07, 10px, #FFF, 2px);
    position: absolute;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
  }

  .weui-wepay-flow__info-top {
    display: none;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 11px;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    @include setBubblePrivate(top, #09bb07);
  }

  .weui-wepay-flow__info-bottom {
    display: none;
    left: 50%;
    transform: translate(-50%, 0);
    top: 11px;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    @include setBubblePrivate(bottom, #09bb07);
  }

  .weui-wepay-flow__info-left {
    display: none;
    top: 50%;
    transform: translate(0, -50%);
    right: 12px;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    @include setBubblePrivate(left, #09bb07);
  }

  .weui-wepay-flow__info-right {
    display: none;
    top: 50%;
    transform: translate(0, -50%);
    left: 12px;
    .weui-wepay-flow__line_ing & {
      display: block;
    }
    @include setBubblePrivate(right, #09bb07);
  }

  .weui-wepay-flow__line {
    flex: 1;
    background-color: #E2E2E2;
    height: 3px;
    position: relative;
  }

  .weui-wepay-flow__title {
    color: #999999;
    font-size: 14px;
    font-weight: normal;
  }

  .weui-wepay-flow__info {
    color: #999999;
    font-size: 12px;
  }

  .weui-wepay-flow__process {
    display: none;
    background-color: #09bb07;
    height: 3px;
    position: relative;
    .weui-wepay-flow__line_ing & {
      display: block;
      width: 50%;
    }
    .weui-wepay-flow__line_done & {
      display: block;
    }
  }

  .weui-wepay-flow_custom {
    .weui-wepay-flow__bd {
      justify-content: flex-start;
    }
    .weui-wepay-flow__line {
      flex: none;
      width: 100px;
    }
  }

  .weui-wepay-flow_vertical {
    .weui-wepay-flow__bd {
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }
    .weui-wepay-flow__line {
      height: auto;
      width: 3px;
    }
    .weui-wepay-flow__line_ing {
      .weui-wepay-flow__process {
        height: 50%;
      }
    }
    .weui-wepay-flow__process {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
    }
    .weui-wepay-flow__line_done {
      .weui-wepay-flow__process {
        height: 100%;
      }
    }
  }

  .weui-wepay-flow_vertical-custom {
    .weui-wepay-flow__bd {
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }
    .weui-wepay-flow__line {
      width: 3px;
      flex: none;
    }
    .weui-wepay-flow__line_ing {
      .weui-wepay-flow__process {
        height: 50%;
      }
    }
    .weui-wepay-flow__process {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
    }
    .weui-wepay-flow__line_done {
      .weui-wepay-flow__process {
        height: 100%;
      }
    }
  }

  .weui-wepay-flow-auto {
    position: relative;
  }

  .weui-wepay-flow-auto__bd {
    position: relative;
  }

  .weui-wepay-flow-auto__state {
    position: absolute;
    left: 0;
    top: 4px;
    width: 14px;
    height: 14px;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: #FFF;
    border-radius: 7px;
    background-color: #E2E2E2;
    z-index: 2;
  }

  .weui-wepay-flow-auto__state_on {
    background-color: #09bb07;
  }

  .weui-wepay-flow-auto__line {
    position: absolute;
    z-index: 1;
    width: 2px;
    background-color: #dddddd;
    top: 10px;
    bottom: -4px;
    left: 6px;
  }

  .weui-wepay-flow-auto__line_on {
    background-color: #09bb07;
  }

  .weui-wepay-flow-auto__li {
    position: relative;
    padding-bottom: 20px;
    padding-left: 30px;
  }

  .weui-wepay-flow-auto__title {
    color: #999999;
    font-size: 14px;
    font-weight: normal;
  }

  .weui-wepay-flow-auto__info {
    color: #999999;
    font-size: 12px;
  }
</style>
