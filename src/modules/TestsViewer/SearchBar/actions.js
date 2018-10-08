import types from './types'

export const fetchFiltersTests = (tests) => ({
  type: types.FETCH_FILTERS_TESTS,
  tests,
});


export default {
  fetchFiltersTests,
}
