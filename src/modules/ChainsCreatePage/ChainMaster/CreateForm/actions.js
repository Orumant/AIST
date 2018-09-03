import types from './types'

const fieldAdded = (typeField) => ({
  type: types.FIELD_ADDED,
  typeField,
});

const fieldDeleted = (index) => ({
  type: types.FIELD_DELETED,
  index
});


export default {
  fieldAdded,
  fieldDeleted,
}
