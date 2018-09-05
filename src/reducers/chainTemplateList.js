import {
  ALL_CHAIN_TEMPLATE_FETCH_SUCCEED,
  FILTER_CHAIN_TEMPLATE_LIST_BY_PARAMS,
  STANDS_FETCH_SUCCEED,
  TEST_CHAIN_TEMPLATE_FETCH_SUCCEED,
  FILTER_CHAIN_TEMPLATE_LIST_BY_TAGS_SUCCEED,
  CLEAR_FILTER_TEMPLATE_LIST,
} from '../constants'

const initialState = {
  chainTemplateList: [],
  filterChainTemplateList: [],
  fullChainTemplateList: [],
  stands: [],
  tags: [],
};

const chainTemplateListReducer = (state = initialState, action) => {
  switch (action.type) {

    case ALL_CHAIN_TEMPLATE_FETCH_SUCCEED: {
      return {
        ...state,
        chainTemplateList: action.payload,
      }
    }

    case TEST_CHAIN_TEMPLATE_FETCH_SUCCEED: {
      let chainTemplates = [...state.chainTemplateList];
      let tests = action.payload;
      let tags = [];
      chainTemplates.map((chain) => {
        const test = chain.tests;
        chain.tag_names = {"static": [], "dynamic": []};
        chain.stand = [];
        chain.test_info = [];
        chain.tests = {"tests": [], "test_info": []};
        tests.map((test_obj) => {
          test.map((test_id) => {
            if (test_obj.test_id === test_id) {
              if (test_obj.tag_names.static !== undefined) {
                let staticTag = test_obj.tag_names.static.filter(function (x) {
                  return x !== "" && x !== undefined && x !== null;
                });
                chain.tag_names.static = chain.tag_names.static.concat(staticTag);
              }
              if (test_obj.tag_names.dynamic !== undefined) {
                let dynamicTag = test_obj.tag_names.dynamic.filter(function (x) {
                  return x !== "" && x !== undefined && x !== null;
                });
                chain.tag_names.dynamic = chain.tag_names.dynamic.concat(dynamicTag);
              }
              chain.stand = chain.stand.concat(test_obj.stands);
            }
          });
        });
        test.map((test_id) => {
          tests.map((test_obj) => {
            if (test_obj.test_id === test_id) {
              chain.tests.test_info = chain.tests.test_info
                .concat(new Array("{\"id\": \"" + test_obj.test_id
                  + "\", \"info\": \"" + test_obj.test_name + "\"}"));
            }
          });
        });
        chain.tests.tests = test;
        chain.tag_names.static = Array.from(new Set(chain.tag_names.static));
        chain.tag_names.dynamic = Array.from(new Set(chain.tag_names.dynamic));
        chain.stand = Array.from(new Set(chain.stand));
        tags = tags.concat(chain.tag_names.static).concat(chain.tag_names.dynamic);
        return chain;
      });
      let tagsSort = [];
      tags.forEach(function (x) {
        if (-1 === tagsSort.indexOf(x))
          tagsSort.push(x);
      });
      return {
        ...state,
        fullChainTemplateList: chainTemplates,
        filterChainTemplateList: chainTemplates,
        tags: tagsSort,
      }
    }

    case STANDS_FETCH_SUCCEED: {
      return {
        ...state,
        stands: action.payload,
      }
    }

    case FILTER_CHAIN_TEMPLATE_LIST_BY_PARAMS: {
      let chainTemplates = [...state.fullChainTemplateList];
      let filter = action.filter;
      let filterChainTemplateList = [];
      let arrFilter = [];
      if (filter.nameSelectValue.length > 0) {
        arrFilter = filter.nameSelectValue.map(f => f.label);
        filterChainTemplateList = chainTemplates.filter(function (chain) {
          return arrFilter.indexOf(chain.name) !== -1;
        });
      }
      if (filter.markerSelectValue.length > 0) {
        arrFilter = filter.markerSelectValue.map(f => f.label);
        if (filterChainTemplateList.length > 0)
          filterChainTemplateList = filterChainTemplateList.filter(function (chain) {
            return arrFilter.indexOf(chain.marker) !== -1;
          });
        else
          filterChainTemplateList = chainTemplates.filter(function (chain) {
            return arrFilter.indexOf(chain.marker) !== -1;
          });
      }
      if (filter.standsSelectValue.length > 0) {
        arrFilter = filter.standsSelectValue.map(f => f.label);
        if (filterChainTemplateList.length > 0)
        filterChainTemplateList = filterChainTemplateList.filter(function (chain) {
          let check = false;
          chain.stand.map((stand) => {
            if (arrFilter.indexOf(stand) !== -1)
              check = true;
          });
          return check;
        });
        else
          filterChainTemplateList = chainTemplates.filter(function (chain) {
            let check = false;
            chain.stand.map((stand) => {
              if (arrFilter.indexOf(stand) !== -1)
                check = true;
            });
            return check;
          });
      }
      return {
        ...state,
        filterChainTemplateList: filterChainTemplateList,
      }
    }

    case FILTER_CHAIN_TEMPLATE_LIST_BY_TAGS_SUCCEED: {
      const chainTemplates = [...action.chain_templates];
      let chainTemplateList = [...state.filterChainTemplateList];
      chainTemplateList = chainTemplateList.filter(function (chain) {
        let check = false;
        chainTemplates.map((chainTemp) => {
          if (chain.name === chainTemp.name)
            check = true;
        });
        return check;
      });
      return{
        ...state,
        filterChainTemplateList: chainTemplateList,
      }
    }

    case CLEAR_FILTER_TEMPLATE_LIST: {
      const chainTemplateList = [...state.fullChainTemplateList];
      return{
        ...state,
        filterChainTemplateList: chainTemplateList,
      }
    }

    default:
      return {
        state,
      }
  }
};

export default chainTemplateListReducer;
