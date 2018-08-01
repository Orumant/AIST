import React from 'react'
import {
  SortingState, IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import {StatusLabel} from "./StatusLabel";


class DetailsTable extends React.Component {

  render() {
    const {test_details} = this.props;
    const columns = [
      {name: "starting_order", title: "№"},
      {name: "test_name", title: "Тест"},
      {name: "a_system", title: "Контур"},
      {name: "real_start_time", title: "Время старта"},
      {name: "end_time", title: "Время окончания"},
      {name: "build_link", title: "Билд"},
      {name: "status", title: "Статус"},
    ];
    const tableColumnExtensions = [
      { columnName: 'status', width: 200 },
      { columnName: 'starting_order', width: 40 },
    ];

    const Cell = (props, ...others) => {
      const {column} = props;
      switch (column.name) {
        case "status": return <Table.Cell><StatusLabel {...props}/></Table.Cell>;
        case "build_link": return <Table.Cell><a href={props.value}>{props.value}</a></Table.Cell>;
        default:
          return <Table.Cell {...props}/>;
      }
    };

    return (
        <Grid rows={test_details} columns={columns}>
          <SortingState
            defaultSorting={[
              { columnName: 'starting_order', direction: 'asc' },
            ]}
          />

          <IntegratedSorting />

          <Table cellComponent={Cell}
                 columnExtensions={tableColumnExtensions}/>
          <TableHeaderRow/>
        </Grid>
    )
  }
}

export default DetailsTable
