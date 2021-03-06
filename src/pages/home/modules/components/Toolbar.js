import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = theme => ({
  root: {
    height: 64,
    backgroundColor: "#FECB3D",
    [theme.breakpoints.up('sm')]: {
      height: 80,
    },
  },
});

export default withStyles(styles)(Toolbar);
