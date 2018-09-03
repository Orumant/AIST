import {connect} from 'react-redux'
import { Actions } from "../../../modules/ChainsCreatePage/ChainMaster/CreateForm";
import CreateForm from "../../../pages/ChainsCreatePage/index/ChainMaster/CreateForm";

function mapStateToProps(state) {
  return {
    fields: state.createFormReducer.fields,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addField: (type) => dispatch(Actions.fieldAdded(type)),
    updateField: (ind) => (name, content) => {console.log(ind, name, content); dispatch(Actions.fieldUpdated(ind)(name, content))},
    deleteField: (ind)  => dispatch(Actions.fieldDeleted(ind)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
