import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  SortingState, PagingState, GroupingState, IntegratedGrouping,
  IntegratedPaging, IntegratedSorting, RowDetailState,
} from '@devexpress/dx-react-grid';
import {
  Grid, Table, TableHeaderRow, TableGroupRow,
  PagingPanel, GroupingPanel, DragDropProvider, Toolbar,
  TableColumnVisibility, ColumnChooser, TableRowDetail,
} from "@devexpress/dx-react-grid-material-ui";

import DetailsTable from "./TestsTable/DetailsTable";
import {columns, tableColumnExtensions} from "./TestsTable/ColumnsProps";
import {Cell} from './TestsTable/Cell';
import {restartChain} from "../../../modules/Results/TestTable/operations";


class TestsTable extends React.Component {

  state = {
    expandedRowIds: [],
  };

  changeExpandedDetails = (expandedRowIds) => {
    const {orders, fetchOrderDetails} = this.props;
    expandedRowIds.forEach(id => fetchOrderDetails(orders[id].id_order));
    this.setState({expandedRowIds})};

  Messages = {
    groupByColumn: "Перетащите сюда заголовок для группировки по столбцу",
    noData: "Нет данных",
    showColumnChooser: "Показать выбор столбцов",
    sortingHint: "Отсортировать",
    showAll: "Все",
    rowsPerPage: "Количество строк на странице",
  };


  RowDetails = ({row}) => {
    const {test_details} = this.props;
    if (test_details[row.id_order]) return <DetailsTable test_details={test_details[row.id_order]}/>;
    return <span/>;
  };

  render() {
    const {orders, restartChain, FilterButton} = this.props;
    const {expandedRowIds} = this.state;
    const pageSizes = [5, 10, 15, 0];

    return (
        <Grid rows={orders} columns={columns}>
          <SortingState
            defaultSorting={[
              { columnName: 'start_time', direction: 'desc' },
            ]}
          />
          <GroupingState
            defaultGrouping={[{columnName: 'chain_name',}]}
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


          <Table
            cellComponent={props => Cell(props, restartChain)}
            columnExtensions={tableColumnExtensions}
            messages={this.Messages}/>
          <TableHeaderRow showSortingControls messages={this.Messages}/>
          <TableRowDetail contentComponent={this.RowDetails}/>

          <PagingPanel
            pageSizes={pageSizes}
            messages={this.Messages}
          />
          <TableGroupRow />

          <TableColumnVisibility
            defaultHiddenColumnNames={['marker', 'id_order', 'tags']}
          />
          <Toolbar />
          <GroupingPanel
            showSortingControls
            showGroupingControls
            messages={this.Messages}
          />
          <ColumnChooser messages={this.Messages}/>

        </Grid>

    )
  }
}

export default TestsTable
