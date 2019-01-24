import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 140
  }
};

function Article(props) {
  const { classes } = props;
  const { title, url } = props.doc;
  const image = props.doc.image
    ? "http://meduza.io" + props.doc.image.small_url
    : "data:image/png;base64,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";
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Typography component="p">{title}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={"http://meduza.io/" + url}
            target="_blank"
          >
            Читать полную новость
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
  doc: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
