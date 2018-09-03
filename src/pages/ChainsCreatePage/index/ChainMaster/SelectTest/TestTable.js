import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SortingState, PagingState, SelectionState,
  IntegratedPaging, IntegratedSorting, IntegratedSelection
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui';

class TestTable extends React.Component {
  state = {
    columns: [
      // { name: 'test_id', title: 'ID', getCellValue: row => parseInt(row.test_id)},
      { name: 'test_name', title: 'Название' },
      { name: 'a_system', title: 'АС' },
      { name: 'stands', title: 'Стенды', getCellValue: row => row.stands.join(', ')},
      { name: 'static_tags', title: 'Теги', getCellValue: row => row.static_tags ? row.static_tags.join(', ') : []},
    ],
    selection: [],
    selectedTest: [],
    tests: [],
  };

  tableColumnExtensions = [
    { columnName: 'test_id', width: 64},
  ];

  changeSelection = selection => {
    const {tests, onSelectTest} = this.props;
    const {selectedTest} = this.state;
    let new_selected = [...selectedTest];
    // Удаляем те тесты, которые есть в общем списке тестов, но отсутствуют в списке выбранных
    selectedTest.forEach((selected, ind) =>
      tests.some((test, index) => test.test_id === selected.test_id && selection.indexOf(index) === -1)  ?
        new_selected.splice(ind, 1) : null);
    //Добавляем тесты, которые есть в списке выбранных и которых еще нет в сохраненном списке тестов
    selection.forEach(id =>
      selectedTest.some(selected => tests[id].test_id === selected.test_id) ?  null: new_selected.push(tests[id]));
    this.setState({selection, selectedTest: new_selected});
    onSelectTest(new_selected)
  };

  componentDidUpdate() {
    const {tests} = this.props;
    const {selectedTest} = this.state;
    if (this.state.tests !== tests) {
      let new_selection = [];
      // Получаем индексы уже выбранных тестов в новом общем списке тестов
      selectedTest.forEach(selected => tests.forEach((test, ind) => test.test_id === selected.test_id? new_selection.push(ind): null));
      this.setState({tests: tests, selection: new_selection})
    }
  };

  render() {
    const { columns, selection } = this.state;

    const {tests} = this.props;
    const pageSizes = [5, 10, 15, 0];

    return (
      <Paper>
        <Grid
          rows={tests}
          columns={columns}
        >

          <SortingState
            defaultSorting={[
              { columnName: 'start_time', direction: 'desc' },
            ]}
          />
          <PagingState
            defaultCurrentPage={0}
            defaultPageSize={10}
          />
          <SelectionState
            selection={selection}
            onSelectionChange={this.changeSelection}
          />


          <IntegratedSorting />
          <IntegratedPaging />
          <IntegratedSelection />


          <Table columnExtensions={this.tableColumnExtensions}/>
          <TableHeaderRow showSortingControls/>
          <TableSelection
            selectByRowClick
          />

          <PagingPanel
            messages={this.Messages}
          />
        </Grid>
      </Paper>
    );
  }
}

export default TestTable;
