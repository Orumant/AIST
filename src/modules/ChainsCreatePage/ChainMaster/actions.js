import types from './types'

const dataFetchSucceed = (templates, tests, groups) => ({
  type: types.DATA_FETCH_SUCCEED,
  templates,
  tests,
  groups
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});


export default {
  dataFetchSucceed,
  startFetching,
  endFetching,
}
