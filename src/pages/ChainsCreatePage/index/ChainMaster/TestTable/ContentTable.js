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

class ContentTable extends React.Component {
  state = {
    columns: [
      { name: 'test_id', title: 'ID', getCellValue: row => parseInt(row.test_id)},
      { name: 'test_name', title: 'Название' },
      { name: 'a_system', title: 'АС' },
      { name: 'stands', title: 'Стенды', getCellValue: row => row.stands.join(', ')},
      { name: 'static_tags', title: 'Теги', getCellValue: row => row.static_tags ? row.static_tags.join(', ') : []},
    ],
    selection: [],
  };

  tableColumnExtensions = [
    { columnName: 'test_id', width: 64},
  ];

  changeSelection = selection => {
    const {handleSelection, onSelectTest} = this.props;
    console.log(selection)
    this.setState({selection});
    handleSelection(selection.length);
    onSelectTest(selection)
  };


  render() {
    const { columns, selection } = this.state;
    const {testsAll} = this.props;
    const pageSizes = [5, 10, 15, 0];

    return (
      <Paper>
        <Grid
          rows={testsAll}
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

export default ContentTable;
