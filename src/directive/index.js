import Loading from '../components/Loading/Loading.vue'
import { createApp } from '../createApp'

// 自定义属性名称
const attr = 'data-loading-id'

// 保存实例队列
let instanceList = []

/**
 * 添加数据
 * @param {*} el
 */
function create(el) {
  // 创建实例
  const loadingApp = createApp(Loading)
  const instance = loadingApp.mount(document.createElement('div'))
  const id = instance.$.uid

  // 设置唯一属性
  el.setAttribute(attr, id)

  // 添加到实例列表
  const data = { id: id, $el: instance.$el }
  instanceList.push(data)

  //  添加到dom
  el.appendChild(instance.$el)

  // 设置样式
  el.style.overflow = 'hidden'
}

/**
 * 获取id和当前项
 * @param {*} el
 * @returns
 */
function getIdAndItem(el) {
  const id = el.getAttribute(attr) ? Number(el.getAttribute(attr)) : null
  const item = instanceList.find(item => item.id === id)
  return { id, item }
}

/**
 * 移除数据
 * @param {*} el
 * @param {*} item
 * @param {*} id
 */
function remove(el, item, id) {
  el.removeChild(item.$el)
  el.removeAttribute(attr)
  instanceList = instanceList.filter(item => item.id !== id)
  el.style.overflow = 'auto'
}

export default function (app) {
  app.directive('loading', {
    mounted(el, { value }) {
      // 值是true  创建实例  并且添加到实例列表
      value && create(el)

      // 值是false  不做处理
    },
    updated(el, { value }) {
      const { item, id } = getIdAndItem(el)

      // 存在则添加
      if (value && !item) {
        create(el)
      }
      // 不存在则移除
      if (item && !value) {
        remove(el, item, id)
      }
    },
    beforeUnmount(el) {
      // 组件卸载时移除
      const { item, id } = getIdAndItem(el)
      if (item) {
        remove(el, item, id)
      }
    }
  })
}
