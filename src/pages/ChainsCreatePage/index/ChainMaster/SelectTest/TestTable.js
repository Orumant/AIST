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
    this.setState({selection, selectedTest: selection.map(id => tests[id])});
    onSelectTest(selection)
  };

  // componentDidUpdate() {
  //   const {tests} = this.props;
  //   if (this.state.tests !== tests) {
  //
  //   }
  // };

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
            showSelectAll
          />

          <PagingPanel
            pageSizes={pageSizes}
            messages={this.Messages}
          />
        </Grid>
      </Paper>
    );
  }
}

export default TestTable;
