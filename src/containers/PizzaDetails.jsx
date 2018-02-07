import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card } from 'material-ui';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import { PizzaDescription } from '../components';
import { PizzaForm } from './';

import { getPizzaById } from '../requests/pizzas';
import { setAppTitle } from '../store/app/actions';

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
        <PizzaDescription
          pizza={pizza}
          onBack={() => this.props.history.push('/pizza')}
        />
        <Divider light />
        <PizzaForm
          pizza={pizza}
        />
      </Card>
    );
  }
}

PizzaDetails.propTypes = {
  setAppTitle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setAppTitle: title => dispatch(setAppTitle(title)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(PizzaDetails));
