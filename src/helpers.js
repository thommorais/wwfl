export function isTheRightOne(answer, answers) {
  const { isRight } = answers.find(item => item.title === answer)
  return isRight
}

export function toCamelCase(str) {
  return str.replace(/(?:^.|[A-Z]|\b.)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '')
}

export const isMobile = {
  Android    : () => navigator.userAgent.match(/Android/i),
  BlackBerry : () => navigator.userAgent.match(/BlackBerry/i),
  iOS        : () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera      : () => navigator.userAgent.match(/Opera Mini/i),
  Windows    : () => navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i),
  any        : () => isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
}
