export const validateTestsByStands  = (tests)  => {
  let uniqueStands = [];
  tests.map((test)=> test ? test.stands.map(
    (stand) => uniqueStands.indexOf(stand) === -1 ? uniqueStands.push(stand) : null
  ) : null);
  const stands = uniqueStands.filter((stand) => tests.every((test) => test? test.stands.indexOf(stand) !== -1 : false));
  return stands.length === 0 && tests.length > 0
};

export default {
  validateTestsByStands,
}
