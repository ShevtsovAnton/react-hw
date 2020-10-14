import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  select: {
    width: '100%',
    marginBottom: theme.spacing(3),
    '& .MuiInputLabel-root': {
      color: '#f65261'
    },
    '& .MuiFormHelperText-root': {
      color: '#ffffff'
    }
  }
}));

export default useStyles;
