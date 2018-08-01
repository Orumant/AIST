import React from 'react'
import Paper from '@material-ui/core/Paper';
import {
  SortingState, SelectionState, FilteringState, PagingState, GroupingState,
  IntegratedFiltering, IntegratedGrouping, IntegratedPaging, IntegratedSorting, IntegratedSelection,
  RowDetailState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow,
  PagingPanel, GroupingPanel, DragDropProvider, TableColumnReordering, Toolbar,
  TableColumnVisibility, ColumnChooser, TableRowDetail,
} from "@devexpress/dx-react-grid-material-ui";
import {StatusLabel} from "./TestsTable/StatusLabel";
import {Progress} from "./TestsTable/Progress";
import DetailsTable from "./TestsTable/DetailsTable";


class TestsTable extends React.Component {

  state = {
    expandedRowIds: [],
    grouping: [{columnName: 'chain_name',}],
  };

  changeExpandedDetails = (expandedRowIds) => {
    const {orders, fetchOrderDetails} = this.props;
    expandedRowIds.forEach(id => fetchOrderDetails(orders[id].id_order));
    this.setState({expandedRowIds})};

  changeGrouping = (grouping) => this.setState({grouping});

  RowDetails = ({row}) => {
    const {test_details} = this.props;
    if (test_details[row.id_order]) {console.log(test_details); return <DetailsTable test_details={test_details[row.id_order]}/>;}
    return <span>Данные не найдены</span>;
  };

  render() {
    const {orders} = this.props;
    const {expandedRowIds, grouping} = this.state;
    const columns = [
      {name: "id_order", title: "ID заявки"},
      {name: "chain_name", title: "Имя цепочки"},
      {name: "marker", title: "Маркер данных"},
      {name: "start_time", title: "Время создания"},
      {name: "tags", title: "Теги"},
      {name: "progress", title: "Прогресс"},
      {name: "ula_decision", title: "Решение ULA"},
      {name: "status", title: "Статус"},
    ];
    const pageSizes = [5, 10, 15, 0];
    const tableColumnExtensions = [ { columnName: 'status', width: 200 },];

    const Cell = (props) => {
      const {column} = props;
      switch (column.name) {
        case "status": return <Table.Cell><StatusLabel {...props}/></Table.Cell>;
        case "progress": {
          const {progress_overall, progress_passed} = props.row;
          return <Table.Cell><Progress all={progress_overall} now={progress_passed} {...props}/></Table.Cell>
        }
        case "ula_decision": return <Table.Cell>ULA</Table.Cell>;
        default:
          return <Table.Cell {...props}/>;
      }
    };

    const ReplayButton = () => {

    }

    return (
      <Paper>
        <Grid rows={orders} columns={columns}>
          <SortingState
            defaultSorting={[
              { columnName: 'start_time', direction: 'desc' },
            ]}
          />
          <GroupingState
            grouping={grouping}
            onGroupnigChange={this.changeGrouping}
          />
          <PagingState
            defaultCurrentPage={0}
            defaultPageSize={10}
          />

          <IntegratedGrouping />
          <IntegratedSorting />
          <IntegratedPaging />

          <DragDropProvider />

          <RowDetailState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={this.changeExpandedDetails}/>


          <Table cellComponent={Cell}
          columnExtensions={tableColumnExtensions}/>
          <TableHeaderRow showSortingControls />
          <TableRowDetail contentComponent={this.RowDetails}/>

          <PagingPanel
            pageSizes={pageSizes}
          />
          <TableGroupRow />

          <TableColumnVisibility
            defaultHiddenColumnNames={['marker', 'id_order', 'tags']}
          />
          <Toolbar />
          <GroupingPanel showSortingControls showGroupingControls/>
          <ColumnChooser />

        </Grid>
      </Paper>
    )
  }
}

export default TestsTable
