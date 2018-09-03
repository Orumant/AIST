import types from './types'

const initialState = {
  chain_data: {},
  dataAll: {
    templates: [],
    tests: [],
    groups: [],
  },
  isFetching: false,
};

addField = (type) => {
  let new_fields = [...this.state.fields];
  new_fields.push({name: '', param: '', type});
  this.setState({fields: new_fields});
};

deleteField = (index) => {
  let new_fields = [...this.state.fields];
  new_fields.splice(index, 1);
  console.log(new_fields);
  this.setState({fields: new_fields});
};

const chainMasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIELD_ADDED: {
      let new_fields = [...this.state.fields];
      new_fields.push({name: '', param: '', type});
      return {
        ...state,
        isFetching: true,
      }
    }
    case types.FIELD_DELETED: {
      return {
        ...state,
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default chainMasterReducer
