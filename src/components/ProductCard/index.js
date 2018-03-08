import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './style.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function ProductCard(props) {
  const { product, classes } = props;
  console.log('product:' , product);
  return (
    <div className="product">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/assets/img/${product.image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {product.label}
          </Typography>
          <Typography component="p">
            {product.description}
          </Typography>
          <Typography component="p">
           {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="default">
            Share
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);