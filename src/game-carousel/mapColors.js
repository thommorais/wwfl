import { colorsArray } from '../constants'

export default function paintingMap(initialColor, secondColor) {
  // import(/* webpackChunkName:"chroma" */ 'chroma-js').then((chroma) => {
  //   const colors = chroma.scale([initialColor, secondColor]).colors(100)
  // })

  const colors = colorsArray(initialColor, secondColor)
  const map = document.getElementById('usa-map')
  const paths = [].slice.call(map.querySelectorAll('path'))
  paths.forEach(path => path.setAttribute('fill', colors[Math.floor(Math.random() * colors.length - 1) + 1]))
}
