import types from './types';

const initialState = {
  tests: [],
  testsOrigin: [],
  stands: [],
  systems: [],
  tags: [],
  isLoading: false,
};

const TestsTableReducer = (state = initialState, action) => {
    switch (action.type) {

      case types.TESTS_TABLE_FETCH_SUCCEED: {
        const {tests, stands, systems} = action.payload;
        let tagsSet = new Set();

        tests.map(
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

            // собираем список тестов
            if (test.tag_names.static.length > 0) {
              test.tag_names.static.map(tag => tagsSet.add(tag))
            }
            if (test.tag_names.dynamic.length > 0) {
              test.tag_names.dynamic.map(tag => tagsSet.add(tag))
            }

            return test;
          }
        );

        const tags = [...tagsSet];

        let standsList = stands.map(stand => stand.code);

        let systemsList = systems.map(system => system.code);

        return {
          ...state,
          tests,
          tags,
          stands: standsList,
          systems: systemsList,
          isLoading: false,
          testsOrigin: tests,
        }
      }

      case types.TESTS_TABLE_DATA_LOADING_STARTED : {
        return {
          ...state,
          isLoading: true,
        }
      }

      case types.TESTS_TABLE_SUBMIT_FILTERS: {
        const {name, system, stand, tags} = action.payload.filters;
        let filterMe = [...state.testsOrigin];
        //По АС
        if (system !== '') {
          filterMe = filterMe.filter(test => {
            return test.a_system === system
          })
        }
        //По стендам
        if (stand !== '') {
          filterMe = filterMe.filter(test => {
            if (test.stands.length > 0) {
              return test.stands.some((cur => cur === stand));
            } else {
              return false;
            }
          })
        }
        //По тегам
        if (tags.length > 0) {
          filterMe = filterMe.filter(test => {
            for (let i = 0; i < tags.length; i++) {
              if (test.tag_names.static.some(tag => tag === tags[i])
                || test.tag_names.dynamic.some(tag => tag === tags[i])) {
                return true;
              }
            }
            return false;
          });
        }
        //По имени
        if (name !== '') {
          let regexp = new RegExp(name);
          filterMe = filterMe.filter(test => {
            return regexp.test(test.test_name);
          });
        }

        return {
          ...state,
          tests: filterMe,
        }
      }

      case types.TESTS_TABLE_CLEAR_FILTERS: {
        return {
          ...state,
          tests: [...state.testsOrigin],
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
