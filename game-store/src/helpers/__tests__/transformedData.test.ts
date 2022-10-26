import {
  MOCK_GAME_API,
  MOCK_GAME_TRANSFORMED,
} from '@constants/__mocks__/mockGame'
import { Game } from '@self-types/Game.types'
import fetch from 'jest-fetch-mock'
import { transformedData } from '@helpers/transformedData'

beforeEach(async function () {
  fetch.resetMocks()
})

describe('transformed data helper', () => {
  test('Function transformedData should be return empty Array', () => {
    const mock1 = undefined

    const result: Game[] = []

    const resultTransformed = transformedData(mock1)
    expect(resultTransformed).toStrictEqual(result)
  })

  test('Function transformedData should be return new data after transformed', () => {
    const result = MOCK_GAME_TRANSFORMED

    const resultTransformed = transformedData(MOCK_GAME_API as Game[])
    expect(resultTransformed).toStrictEqual(result)
  })
})
