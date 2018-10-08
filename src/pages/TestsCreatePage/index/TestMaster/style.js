export const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit,
  },
  stepContent: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    borderRadius: '0px',
    height: '70%',
  },
  testCard: {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '400px',
    margin: theme.spacing.unit*2,
    zIndex: '1',
  },
  testCardContent: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit + 'px !important',
    paddingRight: theme.spacing.unit,
    display: "flex",
    alignItems: 'center',
  },
  cardContent: {
    flexGrow: '1',
    marginLeft: theme.spacing.unit,
  },
  emptyReorderForm: {
    backgroundColor: 'black',
    opacity: '0.35',
    borderRadius: '10px',
    height: 'calc(100% - 48px)',
    textAlign: 'center',
    margin: '24px',
    paddingTop: '50%'
  },
  navPanel: {
    marginTop: theme.spacing.unit*2,
  },
  gridTitle: {
    marginLeft: theme.spacing.unit*3,
  }
});
