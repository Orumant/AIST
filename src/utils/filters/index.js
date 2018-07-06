export const optionsToArray = (options) => {
  return options.map(option => option.label)
}


export const arrayToOptions = (array) => {
  return array.map((value, index) => {return {label: value, value: index}})
}

export const filterMarkersFromChains = (chains) => {
  return chains.map((chain) => chain.marker).filter((marker, ind, array) => array.indexOf(marker) === ind)
}

export const filterTagsFromTests = (tests) => {
  const tags = [];
  tests.map((test) => Object.keys(test.tag_names).map(
    (tag_type) => test.tag_names[tag_type].map(
      (name) => tags.indexOf(name) === -1 ? tags.push(name): null)));
  return tags
}

export const addObjectToObject = (obg_to_add, main_obj) => {
  Object.keys(obg_to_add).map(key => main_obj[key] = obg_to_add[key]);
  return main_obj
}
