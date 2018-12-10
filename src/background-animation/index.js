export default function backgroundAnimation() {
  import(/* webpackChunkName:"basicscroll" */ 'basicscroll').then((module) => {
    [].slice.call(document.querySelectorAll('.shape')).forEach((elem) => {
      const {
        modifier, y, from, to
      } = elem.dataset
      module
        .create({
          elem,
          from,
          to,
          direct : true,
          props  : {
            '--ty': {
              from : `${y}%`,
              to   : `${-(10 * modifier)}%`
            }
          }
        })
        .start()
    })
  })
}
