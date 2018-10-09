import React from 'react';
import TableCell from "@material-ui/core/TableCell/TableCell";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  tooltip: {
    backgroundColor: 'rgb(67, 136, 204)'
  },
  icon: {
    fill: 'rgb(67, 136, 204)'
  }
});

class SortableTableCell extends React.Component {
  render() {
    const {tooltipTitle, cellWidth, classes, isActive, order, onClick, columnLabel, placement = 'top'} = this.props;
    return (
      <TableCell style={{width: cellWidth}}>
        <Tooltip title={<Typography style={{color: 'white'}} variant={"body2"}>{tooltipTitle}</Typography>}
                 placement={placement}
                 classes={{tooltip: classes.tooltip}}>
          <TableSortLabel active={isActive}
                          direction={order} classes={{icon: classes.icon}}
                          onClick={onClick}>
            <Typography variant={"body2"} style={{fontWeight: 'bold'}}>{columnLabel}</Typography>
          </TableSortLabel>
        </Tooltip>
      </TableCell>
    );
  }
}

SortableTableCell.propTypes = {
  tooltipTitle: PropTypes.string.isRequired,
  cellWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isActive: PropTypes.bool.isRequired,
  order: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  columnLabel: PropTypes.string,
  placement: PropTypes.string,
};

export default withStyles(styles)(SortableTableCell)
