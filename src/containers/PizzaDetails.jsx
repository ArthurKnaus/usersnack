import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';

import { Card, CardHeader, CardContent, CardMedia, Typography, IconButton } from 'material-ui';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import NavigateBeforeIcon from 'material-ui-icons/NavigateBefore';

import { getPizzaById } from '../requests/pizzas';
import { setAppTitle } from '../store/app/actions';

const styles = () => ({
  card: {
    position: 'relative',
  },
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

class PizzaDetails extends Component {
  constructor() {
    super();
    this.state = {
      pizza: null,
    };
  }

  componentWillMount() {
    this.setState({
      pizza: getPizzaById(this.props.match.params.id),
    }, () => {
      const newTitle = `Usersnack - ${this.state.pizza.name}`;
      this.props.setAppTitle(newTitle);
    });
  }

  render() {
    const { classes } = this.props;
    const { pizza } = this.state;

    if (!pizza) return null;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.descriptionWrapper}>
          <div className={classes.description}>
            <IconButton
              className={classes.backButton}
              color="primary"
              onClick={() => this.props.history.push('/pizza')}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <CardHeader
              className={classes.cardHeader}
              title={pizza.name}
              subheader={`${pizza.price} €`}
            />
            <Typography variant="subheading">
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
        <Divider light />
        <Typography variant="subheading">
          TODO: Form
        </Typography>
      </Card>
    );
  }
}

PizzaDetails.propTypes = {
  setAppTitle: PropTypes.func.isRequired,
  ...RouteComponentProps,
};

const mapDispatchToProps = dispatch => ({
  setAppTitle: title => dispatch(setAppTitle(title)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(PizzaDetails));
