import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  field: {
    marginBottom: theme.spacing(3)
  },
  select: {
    width: '100%',
    marginBottom: theme.spacing(3)
  }
}));

export default useStyles;
