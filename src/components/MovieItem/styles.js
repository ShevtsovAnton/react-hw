import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: '0.4s ease-out',
    '&:hover $cardHeader': {
      display: 'block'
    }
  },
  cardMedia: {
    height: 400
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: theme.palette.info.main,
    paddingLeft: 0,
    paddingRight: 0
  },
  cardHeader: {
    position: 'absolute',
    top: 5,
    right: 5,
    display: 'none'
  },
  iconButton: {
    backgroundColor: theme.palette.info.main
  },
  titleAndYear: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  releaseYear: {
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: '0.8rem'
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 0
  },
  closeContainer: {
    position: 'relative',
    marginBottom: 25
  },
  menu: {
    position: 'absolute',
    right: 0,
    top: 0
  }
}));

export default useStyles;
