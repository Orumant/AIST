import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table/Table";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import EditIcon from '@material-ui/icons/Edit';
import './style.css';
import SortableTableCell from "./TestsTable/SortableTableCell";
import {operations} from '../../../../modules/TestsViewer/index';
import JenkinsParamsTable from "./TestsTable/JenkinsParamsTable";
import {getUserName, isObjectEmpty} from "../../../../globalFunc";
import {Link} from "react-router-dom";


const styles = theme => ({
  button: {
    '&:hover': {
      background: 'rgb(58, 101, 160)',
      color: 'white',
      border: 'none'
    },
    background: 'rgb(67, 136, 204)',
    color: 'white',
    border: 'none'
  }
});

class TestsExpandableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      dialogOpen: null,
      order: 'asc',
      orderBy: null,
      sidebarOpen: false,
    };
  }

  handlePageChange = (event, page) => {
    this.setState({page});
  };

  handleSortDirectionChange = (prop) => () => {
    let order = 'desc';
    if (this.state.orderBy === prop && this.state.order === order) {
      order = 'asc';
    }
    this.props.tests.sort(operations.getSortFunc(order, prop));
    this.setState({orderBy: prop, order});
  };

  handleModalTableClosed = () => {
    this.setState({dialogOpen: null})
  };

  render() {
    const {tests} = this.props;
    const {page, rowsPerPage, dialogOpen, order, orderBy} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, tests.length - page * rowsPerPage);
    return (
      <Table className={'table'}>
        <TableHead>
          <TableRow className={'table-header'}>
            <TableCell padding={"checkbox"}/>
            <SortableTableCell order={order}
                               onClick={this.handleSortDirectionChange('test_name')}
                               columnLabel={'Название'}
                               placement={'right'}
                               isActive={orderBy === 'test_name'}
                               tooltipTitle={'Сортировать по наименованию'}
                               cellWidth={'30vw'}/>
            <SortableTableCell order={order}
                               onClick={this.handleSortDirectionChange('stands')}
                               columnLabel={'Контур'}
                               isActive={orderBy === 'stands'}
                               tooltipTitle={'Сортировать по стендам'}/>
            <SortableTableCell order={order}
                               onClick={this.handleSortDirectionChange('a_system')}
                               columnLabel={'АС'}
                               isActive={orderBy === 'a_system'}
                               tooltipTitle={'Сортировать по АС'}/>
            <TableCell>
              <Typography variant={"body2"} style={{fontWeight: 'bold'}}>
                Теги
              </Typography>
            </TableCell>
            <TableCell className={'btn-column-header'}>
              <Typography variant={"body2"} style={{fontWeight: 'bold'}}>
                Параметры Jenkins
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {tests.length > 0 ?
          <TableBody className={'tests-table-body'}>
            {tests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(test =>
                <TableRow hover key={test.test_id} className={'table-body'}>
                  <TableCell padding={"checkbox"} style={{width: '1%'}}>
                    <IconButton component={Link}
                                to={`/test/edit/${test.test_id}`}
                                disabled={test.owner !== getUserName()}
                                title="Редактировать">
                      {test.owner === getUserName() ? <EditIcon/> : null}
                    </IconButton>
                  </TableCell>
                  <TableCell className={'table-cell'} style={{width: '39%'}}>
                    <Typography variant={"body2"}>
                      {test.test_name}
                    </Typography>
                  </TableCell>
                  <TableCell className={'table-cell'} style={{width: '10%'}}>
                    <Typography variant={"body2"}>
                      {operations.arrayToString(test.stands)}
                    </Typography>
                  </TableCell>
                  <TableCell className={'table-cell'} style={{width: '10%'}}>
                    <Typography variant={"body2"}>
                      {test.a_system}
                    </Typography>
                  </TableCell>
                  <TableCell className={'table-cell'} style={{width: '20%'}}>
                    <Typography variant={"body2"}>
                      {operations.arrayToString(Array.from(new Set([...test.tag_names.static, ...test.tag_names.dynamic])))}
                    </Typography>
                  </TableCell>
                  <TableCell className={'btn-column-content'} style={{width: '20%'}}>
                    {!isObjectEmpty(test.job_trigger) ?
                      <Button onClick={() => this.setState({dialogOpen: test.test_id})}
                              classes={{root: this.props.classes.button}} variant={"outlined"}>Показать</Button>
                      : null
                    }
                    <JenkinsParamsTable isOpen={dialogOpen === test.test_id}
                                        onClose={this.handleModalTableClosed}
                                        jobTrigger={test.job_trigger}/>
                  </TableCell>
                </TableRow>
              )}
            {emptyRows > 0 && <TableRow style={{height: 65 * emptyRows}}><TableCell colSpan={7}/></TableRow>}
            <TableRow>
              <TablePagination className={'pagination'}
                               count={tests.length}
                               labelRowsPerPage={'Элементов на странице'}
                               rowsPerPage={rowsPerPage}
                               labelDisplayedRows={({from, to, count}) => `${from} - ${to} из ${count}`}
                               onChangeRowsPerPage={(event) => this.setState({rowsPerPage: event.target.value})}
                               page={page}
                               variant={'footer'}
                               onChangePage={this.handlePageChange}/>
            </TableRow>
          </TableBody>
          :
          <TableBody>
            <TableRow style={{height: 65 * rowsPerPage}}>
              <TableCell colSpan={7} style={{verticalAlign: 'middle', textAlign: 'center'}}>
                <Typography variant={"display1"}>Результаты не найдены</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        }
      </Table>
    )
  }
}

export default withStyles(styles)(TestsExpandableList);
