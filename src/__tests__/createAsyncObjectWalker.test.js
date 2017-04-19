import { assert } from 'chai'

import AO from '../'

describe('createAsyncObjectWalker', () => {
  it('is a function', () => {
    assert.typeOf(AO.createAsyncObjectWalker, 'function')
  })
  it('returns a function', () => {
    assert.typeOf(AO.createAsyncObjectWalker(), 'function')
  })
})

describe('asyncObjectWalker', () => {
  it('is a function', () => {
    assert.typeOf(AO.asyncObjectWalker, 'function')
  })
  it('returns input', () => {
    assert.deepEqual({}, AO.asyncObjectWalker({}))
  })
})
