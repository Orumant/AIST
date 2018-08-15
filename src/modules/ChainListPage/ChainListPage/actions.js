import types from './types'

const chainsFetchSucceed = (payload) => ({
  type: types.CHAINS_FETCH_SUCCEED,
  payload,
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});


export default {
  chainsFetchSucceed,
  startFetching,
  endFetching,
}
