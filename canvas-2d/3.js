/*
 * @Description: 使用向量的原理画一棵树
 * @Author: shimingwen
 * @Date: 2020-07-13 16:47:49
 * @LastEditTime: 2020-07-13 17:38:54
 * @LastEditors: shimingwen
 */

const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
context.translate(0, canvas.height)
context.scale(1, -1)

context.fillStyle = 'red';
context.beginPath();
const rectSize = [100, 100];
context.rect(0,0, ...rectSize);
context.fill();