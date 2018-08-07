import React from 'react';

const drawerWidth = 350;

export const styles = theme => {
  console.log(theme)
  return{
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}};

