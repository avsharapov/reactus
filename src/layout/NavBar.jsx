import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
              >
                <Link to="/" className={classes.link}>
                  About & News Sample Application
                </Link>
              </Typography>

              <Button color="inherit">
                <Link to="/about" className={classes.link}>
                  About
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/news" className={classes.link}>
                  News
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NavBar);
