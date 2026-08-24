
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { PipedriveSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await PipedriveSDK.test()
    equal(null !== testsdk, true)
  })

})
