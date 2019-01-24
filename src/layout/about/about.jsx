import React from "react";
import Button from "@material-ui/core/Button/Button";
import Counter from "./counter";
import { withStyles } from "@material-ui/core/styles";
import { addCounter, incCount, decCount } from "../../data/action-creators";
import { Add } from "@material-ui/icons";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { connect } from "react-redux";

const styles = {
  root: {
    marginTop: "15px"
  },
  myFab: {
    position: "fixed",
    width: "56px",
    left: "97%",
    bottom: "15px",
    marginLeft: "-28px",
    zIndex: "100"
  },
  input: {
    display: "none"
  }
};

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="fab"
          color="primary"
          aria-label="Добавить счётчик"
          className={classes.myFab}
          onClick={() => this.props.addCounter(this.props.counters.length)}
        >
          <Add />
        </Button>
        <GridList cols={4} className={classes.gridList}>
          {this.props.counters.map(counter => (
            <GridListTile key={counter.key}>
              <Counter
                inc={this.props.incCount}
                dec={this.props.decCount}
                ckey={counter.key}
                count={counter.count}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counters: state.counters
});

const mapDispatchToProps = dispatch => ({
  addCounter: key => dispatch(addCounter(key)),
  incCount: key => dispatch(incCount(key)),
  decCount: key => dispatch(decCount(key))
});

const ConnectedAbout = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

export default withStyles(styles)(ConnectedAbout);
