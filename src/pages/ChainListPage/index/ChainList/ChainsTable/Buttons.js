import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import {Link} from "react-router-dom";


export const CreateButton = () =>
  <Button component={Link}
          to={'/chains/create'}
          title="Создать">
    <AddIcon style={{marginRight: '8px'}}/>
    Создать
  </Button>;

export const EditButton = (chain_id) =>
  <IconButton
    component={Link}
    to={`/chains/${chain_id}`}
    title="Редактировать">
    <EditIcon/>
  </IconButton>;

export const CloneButton = (chain_id) =>
  <IconButton
    component={Link}
    to={`/chains/${chain_id}/copy`}
    title="Копировать">
    <ContentCopyIcon/>
  </IconButton>;
