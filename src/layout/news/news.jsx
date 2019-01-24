import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button/Button";
import { selectArticle, updateArticle } from "../../data/action-creators";
import { Refresh } from "@material-ui/icons";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Article from "./article";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    marginLeft: "50%"
  },
  myFab: {
    position: "fixed",
    width: "56px",
    left: "97%",
    bottom: "15px",
    marginLeft: "-28px",
    zIndex: "100"
  },
  divList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  tile: {
    overflow: "visible !important"
  },
  root: {
    height: "auto !important",
    padding: "10px !important"
  }
});

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <h2>{this.props.selectedArticle}</h2>
        {this.props.isLoading ? null : (
          <Button
            variant="fab"
            color="primary"
            aria-label="Загрузить новости"
            onClick={() => this.props.updateArticle()}
            className={classes.myFab}
          >
            <Refresh />
          </Button>
        )}
        {!this.props.isFailed && this.props.isLoading && (
          <CircularProgress className={classes.progress} />
        )}
        {this.props.isFailed && <div>Ой-ой :(</div>}
        {!this.props.isLoading && !this.props.isFailed && (
          <div className={classes.divList}>
            <GridList cols={4} cellHeight={180} className={classes.gridList}>
              {this.props.documents.map(doc => (
                <GridListTile
                  key={doc.title}
                  className={classes.gridListTile}
                  classes={{ tile: classes.tile, root: classes.root }}
                >
                  <Article doc={doc} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    selectedArticle: state.article,
    isLoading: state.newsIsloading,
    isFailed: state.newsLoadingIsFailed,
    documents: state.documents
  
});

const mapDispatchToProps = dispatch => ({
  selectArticle: articleText => dispatch(selectArticle(articleText)),
  updateArticle: () => dispatch(updateArticle())
});

const ConnectedNews = connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

export default withStyles(styles)(ConnectedNews);
