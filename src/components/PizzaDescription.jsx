import { IconButton, CardContent, Typography, CardMedia, CardHeader } from 'material-ui';
import NavigateBeforeIcon from 'material-ui-icons/NavigateBefore';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });

const styles = () => ({
  cardHeader: {
    paddingTop: 0,
    paddingLeft: 24,
  },
  backButton: {
    position: 'absolute',
    height: 32,
    width: 32,
    top: 16,
    left: 8,
  },
  descriptionWrapper: {
    position: 'relative',
    display: 'flex',
  },
  description: {
    flex: '1 1 auto',
  },
  image: {
    minWidth: 167,
    minHeight: 167,
    maxHeight: 167,
  },
});

const PizzaDescription = (props) => {
  const { classes, pizza, onBack } = props;
  return (
    <CardContent className={classes.descriptionWrapper}>
      <div className={classes.description}>
        <IconButton
          className={classes.backButton}
          color="primary"
          onClick={onBack}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <CardHeader
          className={classes.cardHeader}
          title={pizza.name}
          subheader={`Base price: ${formatter.format(pizza.price)}`}
        />
        <Typography variant="subheading" color="textSecondary">
          Ingredients:
        </Typography>
        <Typography variant="body2">
          {pizza.ingredients.join(', ')}
        </Typography>
      </div>
      <CardMedia
        className={classes.image}
        image={`/static/${pizza.img}`}
        title={pizza.name}
      />
    </CardContent>
  );
};

PizzaDescription.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onBack: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PizzaDescription);
