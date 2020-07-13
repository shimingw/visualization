/*
 * @Description: 使用向量的原理画一棵树
 * @Author: shimingwen
 * @Date: 2020-07-13 16:47:49
 * @LastEditTime: 2020-07-13 20:23:16
 * @LastEditors: shimingwen
 * API:
 * Math.atan2(1,1) 根据坐标点计算线与x轴的夹角
 *
 */

const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
context.translate(0, canvas.height)
context.scale(1, -1)
context.lineCap = 'round'

class Vector2D extends Array {
  constructor(x = 1, y = 0) {
    super(x, y)
  }
  set x(v) {
    this[0] = v
  }

  set y(v) {
    this[1] = v
  }

  get x() {
    return this[0]
  }

  get y() {
    return this[1]
  }
  get lenght() {
    return Math.hypot(this.x, this.y)
  }

  copy() {
    return new Vector2D(this.x, this.y)
  }
  add(Vector2D){
    this.x += Vector2D.x
    this.y += Vector2D.y
    return this
  }
  scale(a) {
    this.x *= a
    this.y *= a
    return this
  }
  rotate(rad) {
    const c = Math.cos(rad)
    const s = Math.sin(rad)
    this.x = this.lenght * c
    this.y = this.lenght * s
    return this
  }
}

/**
 *
 * @param {*} context
 * @param {*} v0 起始向量
 * @param {*} length 当前树枝的长度
 * @param {*} thickness 当前树枝的粗细
 * @param {*} dir 当前树枝的方向，用与 x 轴的夹角表示，单位是弧度。
 * @param {*} bias 一个随机偏向因子，用来让树枝的朝向有一定的随机性
 */
function drawBranch(context, v0, length, thickness, dir, bias) {
  const v = new Vector2D().rotate(dir).scale(length)
  const v1 = v0.copy().add(v);
  
  context.lineWidth = thickness;
  context.beginPath()
  context.moveTo(...v0)
  context.lineTo(...v1);
  context.stroke();
}
const v0 = new Vector2D(256, 0)
drawBranch(context, v0, 20, 6, 1)

console.log(v0)
