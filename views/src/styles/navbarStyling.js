import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundImage: linearGradient('#e47ff8', '#b32cf1'),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color : "#314e52",
  },

  navlinks : {
    textTransform : "none",
    color : "#314e52",
  },

  palette: {
    primary: '#0044ff',
  },
}));
