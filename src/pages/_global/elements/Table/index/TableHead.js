import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { columns, order, orderBy, numSelected} = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Tooltip
              title="Сортировать"
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === "checkbox"}
                direction={order}
                onClick={this.createSortHandler("checkbox")}
              >
                <Checkbox
                  indeterminate={numSelected > 0}
                />
              </TableSortLabel>
            </Tooltip>
          </TableCell>
          {columns.map(column => {
            return (
              <TableCell
                key={column.name}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.name ? order : false}
              >
                <Tooltip
                  title="Сортировать"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.name}
                    direction={order}
                    onClick={this.createSortHandler(column.name)}
                  >
                    {column.title}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead

//Todo: допилить сортировку по чекбоксу
// <Tooltip
// title="Сортировать"
// enterDelay={300}
//   >
//   <TableSortLabel
// active={orderBy === "checkbox"}
// direction={order}
// onClick={this.createSortHandler("checkbox")}
// >
// <Checkbox
// indeterminate={numSelected > 0}
// />
// </TableSortLabel>
// </Tooltip>
