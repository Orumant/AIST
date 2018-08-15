import types from './types'

const getStands = (stands) => ({
  type: types.GET_ALL_STANDS,
  stands
});

export default {
  getStands,
}
