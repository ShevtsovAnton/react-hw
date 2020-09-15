import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    backgroundColor: theme.palette.info.main,
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7)
  },
  searchContainer: {
    marginTop: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    paddingBottom: theme.spacing(18)
  },
  searchIcon: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  }
}));

export default useStyles;
