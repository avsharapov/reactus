import React from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    width: "60px"
  }
});

function Counter(props) {
  const { classes, inc, dec, count, ckey } = props;
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => dec(ckey)}
      >
        -
      </Button>
      <TextField
        disabled
        id="outlined-disabled"
        value={count}
        classes={{ root: classes.textField }}
        margin="none"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => inc(ckey)}
      >
        +
      </Button>
    </div>
  );
}

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
  inc: PropTypes.func,
  dec: PropTypes.func,
  count: PropTypes.number,
  ckey: PropTypes.number
};

export default withStyles(styles)(Counter);
