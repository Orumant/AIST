import types from './types'
import Operations from "./operations";

const initialState = {
  tests: [],
  selectedTest: [],
  error: false,
  isFetching: false,
};

const selectTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_START_FETCHING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case types.FILTER_END_FETCHING: {
      return {
        ...state,
        isFetching: false,
      }
    }
    case types.FILTER_TEST_FETCH_SUCCEED: {
      return {
        ...state,
        tests: action.tests,
        isFetching: false,
      }
    }
    case types.CHAIN_MASTER_TEST_SELECTED: {
    let new_selected = [...state.selectedTest];
    const old_selected = [...state.selectedTest];
    const testsAll = [...state.tests];
    const { selection } = action;
    // Удаляем те тесты, которые есть в общем списке тестов, но отсутствуют в списке выбранных
    old_selected.forEach((selected, ind) =>
      testsAll.some((test, index) => test.test_id === selected.test_id && selection.indexOf(index) === -1)  ?
        new_selected.splice(ind, 1) : null);
    //Добавляем тесты, которые есть в списке выбранных и которых еще нет в сохраненном списке тестов
    selection.forEach(id =>
      old_selected.some(selected => testsAll[id].test_id === selected.test_id) ?  null: new_selected.push(testsAll[id]));
    const error = Operations.validateTestsByStands(new_selected);
    return {
      ...state,
      selectedTest: new_selected,
      error,
    }
  }
    case types.CHAIN_MASTER_TEST_REORDERED: {
      console.log('DELETE')
      return {
        ...state,
        selectedTest: action.tests,
      }
    }
    case types.CHAIN_MASTER_TEST_REMOVED: {
      let new_selected = [...state.selectedTest];
      console.log('DELETE')
      new_selected.splice(action.index, 1);
      const error = Operations.validateTestsByStands(new_selected);
      return {
        ...state,
        selectedTest: new_selected,
        error,
      }
    }
    default:
      return state
  }
};

export default selectTestReducer
