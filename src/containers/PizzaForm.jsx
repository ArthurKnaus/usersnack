import { Component } from 'react';
import { PropTypes } from 'prop-types';

import { CardContent, Typography } from 'material-ui';

import { ChipSelect, PriceTable, OrderForm } from '../components';

import { getAllExtras } from '../requests/extras';


class PizzaForm extends Component {
  constructor(props) {
    super(props);

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleFormValueChange = this.handleFormValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAlertText = this.getAlertText.bind(this);

    this.state = {
      extras: [],
      items: [],
      selectedItems: [],
      formValues: {
        name: '',
        address: '',
      },
      formErrors: {
        name: false,
        address: false,
      },
    };
  }

  componentWillMount() {
    const extras = getAllExtras();
    const items = extras.map(extra => extra.name);
    this.setState({
      extras,
      items,
    });
  }

  getAlertText() {
    const sb = [];
    sb.push(`You have successfully ordered a ${this.props.pizza.name}`);
    if (this.state.selectedItems.length > 0) {
      sb.push('Extras:');
      this.state.selectedItems.forEach(e => sb.push(` -${e}`));
    }
    return sb.join('\n');
  }

  handleItemChange(selectedItems) {
    this.setState({
      selectedItems,
    });
  }

  handleFormValueChange(key, value) {
    const { formValues, formErrors } = this.state;
    formValues[key] = value;
    formErrors[key] = value === '';
    this.setState({
      formValues,
      formErrors,
    });
  }

  handleSubmit() {
    const { formValues, formErrors } = this.state;
    let hasError = false;
    Object.keys(formValues).forEach((key) => {
      formErrors[key] = formValues[key] === '';
      hasError = hasError || formErrors[key];
    });
    if (hasError) {
      this.setState({
        formErrors,
      });
    } else {
      alert(this.getAlertText()); //eslint-disable-line
    }
  }

  render() {
    const { pizza } = this.props;

    return (
      <CardContent>
        <Typography variant="subheading" color="textSecondary">
          Choose extras for {pizza.name}:
        </Typography>
        <ChipSelect
          id="pizza-extras"
          label="Extras"
          items={this.state.items}
          value={this.state.selectedItems}
          onChange={this.handleItemChange}
        />
        <PriceTable
          extras={this.state.extras.filter(e =>
            this.state.selectedItems.indexOf(e.name) !== -1)
          }
          basePrice={pizza.price}
        />
        <OrderForm
          values={this.state.formValues}
          errors={this.state.formErrors}
          onValueChange={this.handleFormValueChange}
          onSubmit={this.handleSubmit}
        />
      </CardContent>
    );
  }
}

PizzaForm.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default PizzaForm;
