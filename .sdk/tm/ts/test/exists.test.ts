
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PipedriveSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await PipedriveSDK.test()
    equal(null !== testsdk, true)
  })

})
