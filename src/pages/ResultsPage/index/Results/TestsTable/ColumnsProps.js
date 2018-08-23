export const columns = [
  {name: "id_order", title: "ID заявки"},
  {
    name: "chain_name",
    title: "Имя цепочки",
    getCellValue: row => (row.chain_name? row.chain_name: "<Нетиповая заявка>"),
  },
  {
    name: "marker",
    title: "Маркер данных",
    getCellValue: row => (row.marker !== "no marker"? row.marker: "Нет маркера"),
  },
  {name: "start_time", title: "Время создания"},
  {name: "tags", title: "Теги"},
  {name: "progress", title: "Прогресс"},
  {name: "ula_decision", title: "Решение ULA"},
  {name: "test_name", title: "Этап"},
  {name: "status", title: "Статус"},
  {name: "actions", title: "Действия"},
];

export const tableColumnExtensions = [
  { columnName: 'id_order', align: 'center'},
  { columnName: 'chain_name', align: 'center'},
  { columnName: 'marker', align: 'center'},
  { columnName: 'start_time', align: 'center'},
  { columnName: 'tags', align: 'center'},
  { columnName: 'progress', align: 'center'},
  { columnName: 'ula_decision', align: 'center'},
  { columnName: "test_name", align: 'center'},
  { columnName: 'status', width: 100, align: 'center'},
  { columnName: 'actions', width: 120, align: 'center'},
];
