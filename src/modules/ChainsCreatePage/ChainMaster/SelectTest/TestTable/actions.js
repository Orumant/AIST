import types from './types'

const testSelected = (selection, testsAll) => ({
  type: types.CHAIN_MASTER_TEST_SELECTED,
  selection,
  testsAll
});

export default {
  testSelected,
}
