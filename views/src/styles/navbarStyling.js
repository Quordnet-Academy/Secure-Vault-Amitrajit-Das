import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/key.svg';

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
    color : '#28df99',
     
  },

  navlinks : {
    color : "#314e52",
  },

  palette: {
    primary: '#0044ff',
  },
 
  buttons : {
    fontFamily: 'Graduate, cursive',
    background: '#4a47a3',
    margin : '10px',
    left : '160vh',
    width : '100px',
    height : '60px',
    color : 'white',
    opacity : '1',
  },

  logo : {
    backgroundImage: `url(${Logo})`,   
    backgroundRepeat: 'no-repeat',
  }

}));


