import PropTypes from 'prop-types';

import { TextField, Button } from 'material-ui';
import SendIcon from 'material-ui-icons/Send';

import { withStyles } from 'material-ui/styles';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginRight: 8,
    flex: '1 0 auto',
  },
  button: {
    height: 40,
    marginTop: 24,
  },
  icon: {
    marginLeft: 8,
  },
});

const onEventValue = (key, f) => event => f(key, event.target.value);

const OrderForm = props => (
  <div className={props.classes.container}>
    <TextField
      className={props.classes.input}
      onChange={onEventValue('name', props.onValueChange)}
      required
      id="name"
      label="Name"
      value={props.values.name}
      error={props.errors.name}
      margin="normal"
    />
    <TextField
      className={props.classes.input}
      onChange={onEventValue('address', props.onValueChange)}
      required
      id="address"
      label="Address"
      value={props.values.address}
      error={props.errors.address}
      margin="normal"
    />
    <Button
      className={props.classes.button}
      onClick={props.onSubmit}
      variant="raised"
      color="primary"
    >
      Order
      <SendIcon className={props.classes.icon} />
    </Button>
  </div>
);

OrderForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.bool,
    address: PropTypes.bool,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderForm);
