import types from './types'

const initialState = {
  fields: [],
};

const createFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIELD_ADDED: {
      let new_fields = [...state.fields];
      new_fields.push({name: '', param: '', type: action.typeField});
      return {
        ...state,
        fields: new_fields,
      }
    }
    case types.FIELD_DELETED: {
      let new_fields = [...state.fields];
      new_fields.splice(action.index, 1);
      return {
        ...state,
        fields: new_fields,
      }
    }
    default:
      return state
  }
};

export default createFormReducer
