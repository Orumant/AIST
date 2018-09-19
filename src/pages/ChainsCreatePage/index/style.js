export const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  stepperRoot: {
    width: '300px',
    minWidth: '300px',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  stepContent: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    borderRadius: '0px',
  },
  stepSelectContent: {
    marginTop: theme.spacing.unit,
    borderRadius: '0px',
  },
});
