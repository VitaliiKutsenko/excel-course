import {capitalize} from '@core/utils';

class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
        document.querySelector(selector) : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('');
    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  remove(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getRecording() {
    return this.$el.getBoundingClientRect()
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  get data() {
    return this.$el.dataset
  }

  css(style) {
    Object.keys(style).forEach((key) => {
      this.$el.style[key] = style[key]
    })
  }
}

// event.target
export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
