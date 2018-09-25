import types from './types'

const dataValidated = (errorMessage) => ({
  type: types.DATA_VALIDATED,
  errorMessage
});


export default {
  dataValidated,
}
