import {connect} from 'react-redux'
import { Operations } from "../../modules/ChainsCreatePage/RegExp";
import RegExp from "../../pages/ChainsCreatePage/index/ChainMaster/CreateForm/Field/RegExp"

function mapStateToProps(state) {
  return {
    error: state.regExpReducer.error,
    errorMessage: state.regExpReducer.errorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    validateField: (regExp) => dispatch(Operations.validateForm(regExp)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegExp)
