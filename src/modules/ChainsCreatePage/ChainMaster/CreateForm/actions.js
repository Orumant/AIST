import types from './types'

const fieldAdded = (typeField) => ({
  type: types.FIELD_ADDED,
  typeField,
});

const fieldUpdated = (index) =>  (name, content) => ({
  type: types.FIELD_UPDATED,
  index,
  name,
  content,
});

const fieldDeleted = (index) => ({
  type: types.FIELD_DELETED,
  index
});


export default {
  fieldAdded,
  fieldUpdated,
  fieldDeleted,
}
