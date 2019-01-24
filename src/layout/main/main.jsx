import React from "react";
import Button from "@material-ui/core/Button/Button";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="display1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Developer Course
            </Typography>
            <Typography
              variant="subheading"
              align="center"
              color="textSecondary"
              paragraph
            >
              About the Course This course gives everything you need to begin a
              career in front-end web development. In this fast-paced,
              project-based course, you will be introduced to all the skills
              necessary for web application front-end design and development.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://github.com/kos33rd/web-developer-course/blob/master/Readme.md"
                    target="_blank"
                  >
                    About the Course
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/kos33rd/web-developer-course/blob/master/Course-Projects.MD"
                    target="_blank"
                  >
                    project requirements
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const ConnectedMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default withStyles(styles)(ConnectedMain);
