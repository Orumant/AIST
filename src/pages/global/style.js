import React from 'react';

const drawerWidth = 240;
const filterDrawerWidth = 350;

export const styles = theme => ({
  root: {
    boxShadow: 'none',
    margin: '0px',
},
  rootSummary: {
    padding: '0px',
  },
  'content-expanded': {
    margin: '0px',
},
  content: {
    minHeight: '0px',
  },
  container: {
    overflow: 'initial',
  },
  contentExpanded: {
    margin: '0px',
  },
  rootFilter: {
    padding: '0px',
  },
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
