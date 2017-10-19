import popUpBase from '../popup-base/popup-base.js'
import template from './popup-press-menu.vue'

let popUpConfig = {
}

let defaultConfig = {
  autoSetOrthocenter: true,
  position: 'clickRelative'
}

let incrId = 0
let instancesMap = {}

function PressMenu (constructConfig) {
  this.init(
    defaultConfig, constructConfig,
    popUpConfig, instancesMap,
    template, incrId++
  )
}

PressMenu.prototype = popUpBase
PressMenu.prototype.constructor = PressMenu

export default PressMenu