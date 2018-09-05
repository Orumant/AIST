import types from './types'

export const updateFilterRequest = (request) => ({
  type: types.UPDATE_FILTER_REQUEST,
  request,
});

export const getStartFilterRequest = (request) => ({
  type: types.GET_START_FILTER_REQUEST,
  request,
});

export default {
  updateFilterRequest,
  getStartFilterRequest,
}
