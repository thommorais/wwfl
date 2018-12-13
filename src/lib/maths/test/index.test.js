import test from 'ava'
import { sum } from '../index'

test('sum', (t) => {
  t.plan(2)

  t.is(sum(3, 3), 6, 'should return 6')
  t.is(sum(-5, 10), 5, 'should return 5')
})
