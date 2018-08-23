export const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit,
  },
  testCard: {
    width: '100%',
    maxWidth: '350px',
    maxHeight: '400px',
    margin: theme.spacing.unit*2,
    zIndex: '1',
  },
  testCardContent: {
    paddingTop: theme.spacing.unit*2,
    paddingBottom: theme.spacing.unit*2 + 'px !important',
  },
  cardNumber: {
    position: 'absolute',
    width: theme.spacing.unit*2,
  },
  cardContent: {
    marginLeft: theme.spacing.unit*2,
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
});
