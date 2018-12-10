// vanilla-tilt
export default function titlAnimation() {
  import(/* webpackChunkName:"vanilla-tilt" */ 'vanilla-tilt').then((module) => {
    module.init(document.querySelector('.background-animation'), {
      reverse               : false, // reverse the tilt direction
      max                   : 1, // max tilt rotation (degrees)
      perspective           : 100, // Transform perspective, the lower the more extreme the tilt gets.
      scale                 : 1, // 2 = 200%, 1.5 = 150%, etc..
      speed                 : 400, // Speed of the enter/exit transition
      transition            : true, // Set a transition on enter/exit.
      easing                : 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      'mouse-event-element' : document.querySelector('main') // css-selector or link to HTML-element what will be listen mouse events
    })
  })
}
