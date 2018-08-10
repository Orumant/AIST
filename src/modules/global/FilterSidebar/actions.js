import types from './types'

export const updateFilterRequest = (request) => ({
  type: types.FETCH_FILTERS_CHAINS,
  request,
});

export default {
  updateFilterRequest,
}
