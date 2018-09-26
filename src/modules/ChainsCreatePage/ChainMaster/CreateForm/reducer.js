import types from './types'

const initialState = {
  fields: [],
  errorMessage: [],
};

const createFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIELD_ADDED: {
      let new_fields = [...state.fields];
      new_fields.push({label: '', paramName: '', type: action.typeField});
      return {
        ...state,
        fields: new_fields,
      }
    }
    case types.FIELD_UPDATED: {
      let new_fields = [...state.fields];
      const { index, name, content } = action;
      new_fields[index][name]= content;
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
    case types.DATA_VALIDATED: {
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    }
    case types.GOT_DATA: {
      const { form } = action.data;
      return {
        ...state,
        fields: form? form : initialState.fields,
      }
    }
    default:
      return state
  }
};

export default createFormReducer
