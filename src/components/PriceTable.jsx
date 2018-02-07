import PropTypes from 'prop-types';

import Table, { TableHead, TableBody, TableRow, TableCell, TableFooter } from 'material-ui/Table';

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });

const sumExtras = (basePrice, extras) => {
  let sum = basePrice;

  if (extras.length > 0) {
    sum += extras.map(e => e.price)
      .reduce((a, b) => a + b);
  }

  // Needed because of floating point precision problem
  return formatter.format(sum);
};

const PriceTable = props => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Item</TableCell>
        <TableCell numeric>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Base price</TableCell>
        <TableCell numeric>{formatter.format(props.basePrice)}</TableCell>
      </TableRow>
      {props.extras.map(extra => (
        <TableRow key={extra.name}>
          <TableCell>{extra.name}</TableCell>
          <TableCell numeric>{formatter.format(extra.price)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell numeric>{sumExtras(props.basePrice, props.extras)}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

PriceTable.propTypes = {
  extras: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default PriceTable;
