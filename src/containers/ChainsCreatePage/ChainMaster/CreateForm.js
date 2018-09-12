import {connect} from 'react-redux'
import { Actions, Operations } from "../../../modules/ChainsCreatePage/ChainMaster/CreateForm";
import CreateForm from "../../../pages/ChainsCreatePage/index/ChainMaster/CreateForm";

function mapStateToProps(state) {
  return {
    fields: state.createFormReducer.fields,
    errorMessage: state.createFormReducer.errorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addField: (type) => dispatch(Actions.fieldAdded(type)),
    updateField: (ind) => (name, content) => dispatch(Actions.fieldUpdated(ind)(name, content)),
    deleteField: (ind)  => dispatch(Actions.fieldDeleted(ind)),
    validateForm: (form, callback)  => dispatch(Operations.validateForm(form, callback)),
    getFields: (data) => dispatch(Actions.getFields(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
