import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import PropTypes from 'prop-types';

import { PizzaListItem } from '../components';
import { getAllPizzas } from '../requests/pizzas';
import { setAppTitle } from '../store/app/actions';

class PizzaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
    };
  }

  componentWillMount() {
    this.setState({
      pizzas: getAllPizzas(),
    });
    this.props.setAppTitle('Usersnack - Pizza Service');
  }

  render() {
    const { pizzas } = this.state;

    if (pizzas.length < 1) return null;
    return (
      <div>
        { pizzas.map(pizza => (
          <PizzaListItem
            key={pizza.id}
            pizza={pizza}
            onClick={() => this.props.history.push(`/pizzas/${pizza.id}`)}
          />
        )) }
      </div>
    );
  }
}

PizzaList.propTypes = {
  history: PropTypes.object.isRequired, //eslint-disable-line
  setAppTitle: PropTypes.func.isRequired,
  ...RouteComponentProps,
};

const mapDispatchToProps = dispatch => ({
  setAppTitle: title => dispatch(setAppTitle(title)),
});

export default connect(null, mapDispatchToProps)(PizzaList);
