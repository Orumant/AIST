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
    deleteField: (ind)  => dispatch(Actions.fieldDeleted(ind)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
