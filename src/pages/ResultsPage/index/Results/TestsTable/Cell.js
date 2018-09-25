import React from 'react';

import {Table} from "@devexpress/dx-react-grid-material-ui";
import {StatusLabel} from "./StatusLabel";
import {Progress} from "./Progress";
import {ULAdecision} from "./ULAdecision";
import {DownloadButton} from "./Cell/DownloadButton";
import {ReplayButton} from "./Cell/ReplayButton";

export const Cell = (props, restartChain) => {
  const {column} = props;
  switch (column.name) {
    case "status": return <StatusLabel {...props}/>;
    case "progress": {
      const {progress_overall, progress_passed} = props.row;
      return <Table.Cell><Progress all={progress_overall} now={progress_passed} {...props}/></Table.Cell>
    }
    case "ula_decision": return <ULAdecision url={props.row.ula_launch_url}{...props}/>;
    case "test_name": {
      const {value, row, style} = props;
      return <Table.Cell style={{textAlign: 'center', ...style}}><a href={row.build_link}>{value}</a></Table.Cell>}
    case "actions": {
      const {status, id_order} = props.row;
      return <Table.Cell>{DownloadButton(id_order)}{ReplayButton(status, id_order, restartChain)}</Table.Cell>
    }
    default:
      return <Table.Cell {...props}/>
  }
};
