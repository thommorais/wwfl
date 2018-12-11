export function isTheRightOne(answer, answers) {
  const { isRight } = answers.find(item => item.title === answer)
  return isRight
}

export function toCamelCase(str) {
  return str.replace(/(?:^.|[A-Z]|\b.)/g, (letter, index) => (index === 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '')
}
