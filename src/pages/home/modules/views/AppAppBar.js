import React from 'react';
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
import { Link } from 'react-router-dom';
import AppBar from "../components/AppBar";
import tiovanTextLogo from "../media/tiovan_LOGO_TEXT.svg";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
const styles = theme => ({
  testeNoLink: {
    textDecoration: "overline",
    "&:hover": {
      color: "white",
      textDecoration: "none"
    }
  },
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  // leftLinkActive: {
  //   color: theme.palette.common.red
  // },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 20,
    "&:hover": {
      color: "white",
      textDecoration: "none"
    },
    textDecoration: "none",
    color: theme.palette.common.red,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    textDecoration: "none",
    color: theme.palette.primary.dark
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            to="/"
          >
            {
              <img
                style={{ display: "block" }}
                src={tiovanTextLogo}
                alt="increase priority"
              />
            }
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/login"
            >
              {"ENTRAR"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(
                classes.rightLink,
                classes.linkSecondary,
                classes.testeNoLink
              )}
              to="/cadastro"
            >
              {"REGISTRE-SE"}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
