import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: theme.spacing(3),
    '& .MuiFormHelperText-root': {
      color: '#ffffff'
    }
  }
}));

export default useStyles;
