import React from 'react';

const filterDrawerWidth = 350;

export const styles = theme => ({
  drawerPaper: {
    width: filterDrawerWidth,
    overflowY: 'initial',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerTitle: {
    flex: '1',
  },
});
