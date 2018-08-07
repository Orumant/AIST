export const optionsToArray = (options) => {
  return options.map(option => option.label)
};

export const arrayToOptions = (array) => {
  return array.map((value, index) => {return {label: value, value: index}})
};

export const filterPropertyFromObjects = (objects, property) => {
  return objects.map((object) => object[property]).filter((val, ind, array) => array.indexOf(val) === ind)
};

export const filterTagsFromTests = (tests) => {
  const tags = [];
  tests.map((test) => Object.keys(test.tag_names).map(
    (tag_type) => test.tag_names[tag_type].map(
      (name) => tags.indexOf(name) === -1 ? tags.push(name): null)));
  return tags
};

export const addObjectToObject = (obg_to_add, main_obj) => {
  Object.keys(obg_to_add).map(key => main_obj[key] = obg_to_add[key]);
  return main_obj
};

export const getCommonValues = (list, property) => {
  const uniqueArray = getAllValuesProperty(list, property);
  return uniqueArray.filter((value) => list.every((unit) => unit? unit[property].indexOf(value) !== -1 : false));
}

const getAllValuesProperty = (list, property) => {
  let uniqueArray = [];
  list.map((unit)=> unit ?
    (Array.isArray(unit[property]) ? unit[property].map(
      (value) => uniqueArray.indexOf(value) === -1 ? uniqueArray.push(value) : null
    ) : (uniqueArray.indexOf(unit[property]) === -1 ? uniqueArray.push(unit[property]) : null))
    : null);
  return uniqueArray
}

export const getChainTests = (chain, tests) => {
  if (tests.length > 0) {
    const test_array = tests.map(test => test.test_id)
    const num = chain.tests.map(test => test_array.indexOf(test))
    const test_new = num.map(n => tests[n])
    const stands = getCommonValues(test_new, 'stands')
    const a_system = getAllValuesProperty(test_new, 'a_system')
    return {...chain, stands, a_system}
  }
}

export const  JSONwithoutBrakets = (JSON) => {
  let string = JSON.replace(']', '')
  return string.replace('[', '')
}
