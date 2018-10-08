/**
 * Функция для сортировки списка тестов по заданному полю
 * @param a - первый объект для сравнения
 * @param b - второй объект для сравнения
 * @param field - поле в объектах a и b по которому идет текущая сортировка
 * @returns {number}
 */
function sortByField(a, b, field) {
  switch (field) {
    case 'test_name':
    case 'a_system': {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    }

    case 'stands': {
      if (a[field].length > b[field].length) {
        return -1;
      }
      if (a[field].length < b[field].length) {
        return 1;
      }
      if (a[field].length === b[field].length && a[field].length === 1) {
        if (a[field][0] > b[field][0]) {
          return 1;
        }
        if (a[field][0] < b[field][0]) {
          return -1;
        }
      }
      return 0;
    }

    default:
      return 0;
  }
}

/**
 * Возвращает функцию для сортировки списка
 * @param order - порядок сортировки ['asc', 'desc']
 * @param orderBy
 * @returns {function(*=, *=): number}
 */
function getSortFunc(order, orderBy) {
  return order === 'desc' ? (a, b) => sortByField(a, b, orderBy) : (a, b) => -sortByField(a, b, orderBy);
}

/**
 * Преобразует массив не объектов в строку, разделенную запятыми
 * @param arr - массив НЕ объектов, т.е. [1,2,3,4]
 * @returns {string} - "1, 2, 3, 4"
 */
const arrayToString = (arr) => {
  return arr.join(', ');
};

export default {
  getSortFunc,
  arrayToString,
}
