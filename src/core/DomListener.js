import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no ${$root} provided`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListener() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      // eslint-disable-next-line no-constant-condition
      if (![method]) {
        const name = this.name || ''
        throw new Error(`${method} is not implemented ${name}`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDomListener() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      this.$root.remove(listener, this[method])
    })
  }
}
function getMethodName(name) {
  return 'on' + capitalize(name)
}
