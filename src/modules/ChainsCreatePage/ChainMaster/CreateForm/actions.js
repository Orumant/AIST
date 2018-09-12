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

const dataValidated = (errorMessage) => ({
  type: types.DATA_VALIDATED,
  errorMessage
});

const getFields = (data) => ({
  type: types.GOT_DATA,
  data
});

export default {
  fieldAdded,
  fieldUpdated,
  fieldDeleted,
  dataValidated,
  getFields,
}
