import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.info.main
  },
  controlGrid: {
    borderBottom: `2px solid ${theme.palette.text.secondary}`
  },
  found: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
}));

export default useStyles;
