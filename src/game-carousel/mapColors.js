import {
  REST_API, colorsArray, mapStates, statesHash
} from '../constants'
import fetcher from '../get-data'
import { percentage } from '../helpers'

export default function paintingMap(initialColor, secondColor) {
  function getState(answer, state) {
    return answer.find(item => item['ga:region'] === state)
  }

  fetcher(REST_API, mapStates, '').then((response) => {
    const iLikeAChallenge = response['i-like-a-challenge'].filter(item => item['ga:country'] === 'United States')
    const giveMeTheMoney = response['give-me-the-money'].filter(item => item['ga:country'] === 'United States')

    const colors = colorsArray(initialColor, secondColor)
    const map = document.getElementById('usa-map')
    const paths = [].slice.call(map.querySelectorAll('path'))

    paths.forEach((path) => {
      const { id } = path
      let color = 50
      const iLikeAChallengeState = getState(iLikeAChallenge, statesHash[id])
      const iLikeAChallengeCount = iLikeAChallengeState ? parseInt(iLikeAChallengeState.totalEvents, 10) : 0
      const giveMeTheMoneyState = getState(giveMeTheMoney, statesHash[id])
      const giveMeTheMoneyCount = giveMeTheMoneyState ? parseInt(giveMeTheMoneyState.totalEvents, 10) : 0
      const totalCount = iLikeAChallengeCount + giveMeTheMoneyCount
      const iLikeAChallengePercent = percentage(iLikeAChallengeCount, totalCount) || 0
      const giveMeTheMoneyPercent = percentage(giveMeTheMoneyCount, totalCount) || 0

      if (iLikeAChallengePercent > giveMeTheMoneyPercent) {
        color = iLikeAChallengePercent - 1
      } else if (giveMeTheMoneyPercent > iLikeAChallengePercent) {
        color = giveMeTheMoneyPercent - 1
      }

      path.setAttribute('fill', colors[parseInt(color, 10)])
    })
  })
}
