import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./index/TableHead";
import {styles} from './style';


//TODO: Лучше проверять с закрытыми глазами, так риск моральных травм меньше

function sortByField(a, b, field, data, selected) {
  if (Array.isArray(a)) {
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
  } else {
    //TODO: допилить сортировку по чекбоксу
    if (field === 'checkbox') {
      const a_ind = data.indexOf(a);
      const b_ind = data.indexOf(b);
      const a_selected = selected.indexOf(a_ind) > -1;
      const b_selected = selected.indexOf(b_ind) > -1;

      if (a_selected < b_selected) {
        return -1;
      }
      if (a_selected > b_selected) {
        return 1;
      }
      return 0;
    }
    else {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    }
  }
}

/**
 * Возвращает функцию для сортировки списка
 * @param order - порядок сортировки ['asc', 'desc']
 * @param orderBy
 * @returns {function(*=, *=): number}
 */
function getSorting(order, orderBy, data, selected) {
  return order === 'desc'
    ? (a, b) => sortByField(a, b, orderBy, data, selected)
    : (a, b) => -sortByField(a, b, orderBy, data, selected);
}


class EnhancedTable extends React.Component {
  state = {
    order: 'desc',
    orderBy: '',
    selected: [],
    page: 0,
    rowsPerPage: 10,
  };

  columns = [
    {name: 'test_name', title: 'Название'},
    {name: 'a_system', title: 'АС'},
    {name: 'stands', title: 'Контуры', getCellValue: row => row.stands.join(', ')},
    {name: 'static_tags', title: 'Теги', getCellValue: row => row.static_tags ? row.static_tags.join(', ') : []},
  ];

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({order, orderBy});
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({selected: state.data.map(n => n.id)}));
      return;
    }
    this.setState({selected: []});
  };

  handleClick = (event, id) => {
    const {selection, onSelectionChange} = this.props;
    const selectedIndex = selection.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selection, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selection.slice(1));
    } else if (selectedIndex === selection.length - 1) {
      newSelected = newSelected.concat(selection.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selection.slice(0, selectedIndex),
        selection.slice(selectedIndex + 1),
      );
    }

    onSelectionChange(newSelected);
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  isSelected = ind => this.props.selection.indexOf(ind) !== -1;


  render() {
    const {classes, data, selection} = this.props;
    const data_in_table = [...data];
    const {order, orderBy, rowsPerPage, page} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div className={classes.root}>
        <div className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            columns={this.columns}
            numSelected={selection.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            rowCount={data.length}
          />
          <TableBody>
            {data_in_table
              .sort(getSorting(order, orderBy, data, selection))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, ind) => {
                const isSelected = this.isSelected(data.indexOf(row));
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, data.indexOf(row))}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={"row" + ind}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected}/>
                    </TableCell>
                    {this.columns.map((column, index) =>
                      <TableCell
                        key={'column' + index}>{column.getCellValue ? column.getCellValue(row) : row[column.name]}</TableCell>
                    )}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{height: 49 * emptyRows}}>
                <TableCell colSpan={6}/>
              </TableRow>
            )}
          </TableBody>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          labelRowsPerPage={'Количество строк на странице'}
          labelDisplayedRows={({from, to, count}) => `${from}-${to} из ${count}`}
        />
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
