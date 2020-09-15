import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  sortByGroup: {
    display: 'flex'
  },
  sortBy: {
    alignSelf: 'center',
    marginRight: 20
  },
  select: {
    position: 'relative',
    top: 5,
    minWidth: 140,
    textAlign: 'center'
  }
});

export default useStyles;
