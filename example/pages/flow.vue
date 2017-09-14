<template>
  <wv-flow></wv-flow>
</template>

<script>
  export default {
    data () {
      return {
        type: 'ios',
        sheetVisible: false,
        actions: []
      }
    },

    methods: {
      showActionsheet (type) {
        this.type = type
        this.sheetVisible = true
      },

      menuClick (key) {
        console.log(`menu ${key} clicked`)
      }
    },

    mounted () {
      this.actions = [
        {
          name: '示例菜单1',
          key: 'menu1',
          method: () => {
            this.menuClick('menu1')
          }
        },
        {
          name: '示例菜单2',
          key: 'menu2',
          method: () => {
            this.menuClick('menu2')
          }
        },
        {
          name: '示例菜单3',
          key: 'menu3',
          method: () => {
            this.menuClick('menu3')
          }
        }
      ]
    }
  }
</script>

<style scoped lang="scss">
</style>
