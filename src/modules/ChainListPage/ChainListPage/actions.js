import types from './types'

const chainsFetchSucceed = (chains) => ({
  type: types.CHAINS_FETCH_SUCCEED,
  chains,
});

const testsFetchSucceed = (testsAll) => ({
  type: types.TESTS_FETCH_SUCCEED,
  testsAll,
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});


export default {
  chainsFetchSucceed,
  testsFetchSucceed,
  startFetching,
  endFetching,
}
