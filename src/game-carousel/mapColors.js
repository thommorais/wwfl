export default function paintingMap(initialColor, secondColor) {
  import(/* webpackChunkName:"chroma" */ 'chroma-js').then((chroma) => {
    const colors = chroma.scale([initialColor, secondColor]).colors(100)
    console.log(colors)
    // adding the color range to the map just for test
    const map = document.getElementById('usa-map')
    const paths = [].slice.call(map.querySelectorAll('path'))
    paths.forEach(path => path.setAttribute('fill', colors[Math.floor(Math.random() * colors.length - 1) + 1]))
  })
}
