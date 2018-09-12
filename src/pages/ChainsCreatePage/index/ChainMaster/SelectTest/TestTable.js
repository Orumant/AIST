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
    selection: [],
    tests: [],
  };

  tableColumnExtensions = [
    { columnName: 'test_id', width: 64},
  ];

  columns =  [
    { name: 'test_name', title: 'Название' },
    { name: 'a_system', title: 'АС' },
    { name: 'stands', title: 'Контуры', getCellValue: row => row.stands.join(', ')},
    { name: 'static_tags', title: 'Теги', getCellValue: row => row.static_tags ? row.static_tags.join(', ') : []},
    ];

  Messages = {
    noData: "Нет данных",
    sortingHint: "Отсортировать",
    info: "{from}-{to} из {count}",
  };

  changeSelection = selection => {
    const {tests, onSelectTest} = this.props;
    onSelectTest(selection, tests);
    this.setState({selection});
  };

  getIndexes = () => {
    const {tests, selectedTest} = this.props;
    let new_selection = [];
    // Получаем индексы уже выбранных тестов в новом общем списке тестов
    selectedTest.forEach(selected => tests.forEach((test, ind) => test.test_id === selected.test_id ? new_selection.push(ind) : null));
    return new_selection
  };

  componentDidUpdate() {
    const {tests, isDeleted, onDelete} = this.props;
    if (this.state.tests !== tests) this.setState({tests: tests, selection: this.getIndexes()});
    else {
      if (isDeleted) {
        this.setState({selection: this.getIndexes()});
        onDelete();
      }
    }

  };

  render() {
    const { selection } = this.state;
    const {tests} = this.props;

    return (
      <Paper>
        <Grid
          rows={tests}
          columns={this.columns}
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


          <Table columnExtensions={this.tableColumnExtensions}
                 messages={this.Messages}/>
          <TableHeaderRow showSortingControls messages={this.Messages}/>
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
