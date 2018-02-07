import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Select, Chip, MenuItem, FormControl, InputLabel, Input } from 'material-ui';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing.unit,
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  activeItem: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

const ChipSelect = props => (
  <FormControl className={props.classes.formControl}>
    <InputLabel htmlFor={props.id}>
      {props.label}
    </InputLabel>
    <Select
      multiple
      value={props.value}
      input={<Input id={props.id} />}
      onChange={event => props.onChange(event.target.value)}
      renderValue={selected => (
        <div className={props.classes.chips}>
          {selected.map(item => (
            <Chip
              key={item}
              label={item}
              onDelete={() => props.onChange(props.value.filter(i => i !== item))}
              className={props.classes.chip}
            />
          ))}
        </div>
      )}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: (ITEM_HEIGHT * 6.5) + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      }}
    >
      {props.items.map(item => (
        <MenuItem
          key={item}
          value={item}
          className={props.value.indexOf(item) > -1
            ? props.classes.activeItem
            : undefined
          }
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

ChipSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipSelect);
