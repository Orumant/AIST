import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';

export const ReplayButton = (status, id_order, restartChain) => {
  if (["RUNNING", "SUCCESS", "no run"].indexOf(status) !== -1) return null;
  return (
    <IconButton onClick={() => restartChain(id_order)} title="Перезапуск теста">
      <ReplayIcon/>
    </IconButton>
  )};
