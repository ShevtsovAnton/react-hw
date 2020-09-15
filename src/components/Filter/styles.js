import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    '& Button': {
      marginRight: theme.spacing(4),
      border: 'none',
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
      '&:hover': {
        backgroundColor: 'inherit'
      },
      '&.selectedFilter': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        marginBottom: '-2px'
      }
    }
  }
}));

export default useStyles;
