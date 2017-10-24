<template>
  <div class="page" ref="page">
    <wv-group title="选择器示例">
      <wv-cell title="单列选择" is-link :value="ticket | pickerValueFilter" @click="ticketPickerClick"></wv-cell>
      <wv-cell title="多列选择" is-link :value="dayAndTime | pickerValueFilter" @click="dayPickerClick"></wv-cell>
      <wv-cell title="联动选择" is-link :value="address | pickerValueFilter" @click="addressPickerClick"></wv-cell>
    </wv-group>
  </div>
</template>

<script>
  import { once } from '../../src/utils/dom.js'
  import chinaAreaData from 'china-area-data'

  let provinces = Object.values(chinaAreaData[86])

  // 获取某一省下的市
  function getCities (province) {
    let provinceCode
    for (let i in chinaAreaData[86]) {
      if (province === chinaAreaData[86][i]) {
        provinceCode = i
        break
      }
    }

    return Object.values(chinaAreaData[provinceCode])
  }

  // 获取某一市下的区/县
  function getAreas (province, city) {
    let provinceCode, cityCode
    for (let i in chinaAreaData[86]) {
      if (province === chinaAreaData[86][i]) {
        provinceCode = i
        break
      }
    }

    for (let i in chinaAreaData[provinceCode]) {
      if (city === chinaAreaData[provinceCode][i]) {
        cityCode = i
        break
      }
    }

    if (chinaAreaData[cityCode]) {
      return Object.values(chinaAreaData[cityCode])
    } else {
      // 只有两级的情况
      return []
    }
  }

  export default {

    data () {
      return {
        ticket: null,
        dayAndTime: null,
        address: null,
        ticketSlots: [
          {
            values: [
              '汽车票',
              '飞机票',
              '火车票',
              '轮船票',
              '其它'
            ],
            defaultIndex: 2
          }
        ],
        daySlots: [
          {
            values: [
              '星期一',
              '星期二',
              '星期三',
              '星期四',
              '星期五'
            ],
            defaultIndex: 0
          },
          {
            values: [
              '上午',
              '下午'
            ],
            defaultIndex: 0
          }
        ],
        addressSlots: [
          {
            values: provinces
          },
          {
            values: []
          },
          {
            values: []
          }
        ]
      }
    },

    created () {
      this.ticketPicker = new this.$picker({
        slots: this.ticketSlots,
        onConfirm: this.confirmTicket,
      })

      this.dayPicker = new this.$picker({
        slots: this.daySlots,
        onConfirm: this.confirmDayTime,
      })

      this.addressPicker = new this.$picker({
        slots: this.addressSlots,
        onConfirm: this.confirmAddress,
        onChange: this.onAddressChange
      })
    },

    methods: {
      ticketPickerClick (e) {
        this.ticketPicker.open(e, {
          defaultValues: this.ticket
        })
      },
      dayPickerClick (e) {
        this.dayPicker.open(e, {
          defaultValues: this.dayAndTime
        })
      },
      addressPickerClick (e) {
        this.addressPicker.open(e, {
          defaultValues: this.address
        })
      },

      onChange (picker, value) {
        console.log(value)
      },

      confirmTicket (picker) {
        this.ticket = picker.getValues()
      },

      confirmDayTime (picker) {
        this.dayAndTime = picker.getValues()
      },

      confirmAddress (picker) {
        this.address = picker.getValues()
      },

      onAddressChange (picker, value) {
        picker.setSlotValues(1, getCities(value[0]))
        picker.setSlotValues(2, getAreas(value[0], value[1]))
      }
    },

    filters: {
      pickerValueFilter (val) {
        if (Array.isArray(val)) {
          return val.toString()
        } else {
          return '请选择'
        }
      }
    }
  }
</script>

<style scoped>
  img {
    position: fixed;
    z-index: 1000000000000000000000000000;
  }

  span{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
