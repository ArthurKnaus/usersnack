import { Card, CardContent, Typography, CardMedia, ButtonBase } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });

const styles = () => ({
  card: {
    display: 'flex',
    marginBottom: 16,
    minHeight: 151,
  },
  button: {
    width: '100%',
    textAlign: 'inherit',
    alignItems: 'normal',
    justifyContent: 'normal',
  },
  details: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  ingredients: {
    flex: '1 0 auto',
  },
  image: {
    minWidth: 151,
    minHeight: 151,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
});

const PizzaListItem = (props) => {
  const { classes, pizza, onClick } = props;
  return (
    <Card className={classes.card}>
      <ButtonBase
        className={classes.button}
        onClick={onClick}
      >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">
              {pizza.name}
            </Typography>
            <Typography className={classes.ingredients} variant="subheading" color="textSecondary">
              {pizza.ingredients.join(', ')}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {formatter.format(pizza.price)}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.image}
          image={`static/${pizza.img}`}
          title={pizza.name}
        />
      </ButtonBase>
    </Card>
  );
};

PizzaListItem.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string,
    details: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(PizzaListItem);
