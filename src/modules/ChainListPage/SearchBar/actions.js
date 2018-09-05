import types from './types'

export const fetchFiltersChains = (chains) => ({
  type: types.FETCH_FILTERS_CHAINS,
  chains,
});

export const fetchFiltersTests = (tests) => ({
  type: types.FETCH_FILTERS_TESTS,
  tests,
});


export default {
  fetchFiltersChains,
  fetchFiltersTests,
}
