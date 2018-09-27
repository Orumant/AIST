import types from './types';

const initialState = {
  tests: [],
  testsOrigin: [],
  isLoading: false,
};

const TestsTableReducer = (state = initialState, action) => {
    switch (action.type) {

      case types.TESTS_TABLE_DATA_LOADING_STARTED : {
        return {
          ...state,
          isLoading: true,
        }
      }

      case types.TESTS_TABLE_DATA_LOADING_ENDED: {
        return {
          ...state,
          isLoading: false,
        }
      }

      case types.TESTS_TABLE_TESTS_FETCH_SUCCEED: {
        const tests = action.payload.map(
          test => {
            //Если tag_names корявый - правим
            if (Object.keys(test.tag_names).length === 0) {
              test.tag_names.static = [];
              test.tag_names.dynamic = [];
            } else {
              if (!test.tag_names.static) {
                test.tag_names.static = []
              }
              if (!test.tag_names.dynamic) {
                test.tag_names.dynamic = [];
              }
            }

            // Приводим job_trigger к нужному виду
            if (Object.keys(test.job_trigger).length > 0) {
              if (test.job_trigger.login && test.job_trigger.login.length > 0) {
                test.job_trigger.password = test.job_trigger.passOrToken;
              } else {
                test.job_trigger.token = test.job_trigger.passOrToken;
              }
            }

            return test;
          }
        );

        return {
          ...state,
          tests,
          isLoading: false,
          testsOrigin: tests,
        }
      }

      case types.TESTS_TABLE_FILTER_BY_NAME_TRIGGERED: {
        let filterMe = [...state.testsOrigin];
        let regexp = new RegExp(action.name);
        filterMe = filterMe.filter(test => {
          return regexp.test(test.test_name);
        });
        return {
          ...state,
          tests: filterMe,
        }
      }

      default:
        return state;
    }
  }
;

export default {
  TestsTableReducer,
}
