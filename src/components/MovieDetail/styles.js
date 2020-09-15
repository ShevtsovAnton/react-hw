import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '400px'
  },
  main: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    backgroundColor: theme.palette.info.main
  },
  rating: {
    fontSize: '2rem',
    border: '1px solid white',
    padding: '0.5em',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    marginLeft: '2rem',
    textAlign: 'center'
  },
  header: {
    display: 'flex'
  },
  detailsBlock: {
    display: 'flex',
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    color: theme.palette.primary.main,
    fontSize: '1.5rem'
  },
  duration: {
    marginLeft: '4rem'
  }
}));

export default useStyles;
