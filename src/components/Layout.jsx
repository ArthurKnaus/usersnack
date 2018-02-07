import { Grid, AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = theme => ({
  contentWrapper: {
    paddingTop: (theme.spacing.unit * 6) + 64,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit + 56,
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: (theme.spacing.unit * 8) + 64,
    },
  },
});

const Layout = props => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          { props.title }
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container justify="center" className={props.classes.contentWrapper}>
      <Grid item xs={12} md={10} lg={8} xl={8}>
        { props.children }
      </Grid>
    </Grid>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    contentWrapper: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  title: state.app.title,
});

export default withStyles(styles)(connect(mapStateToProps)(Layout));

// export without higher-order-components for testing
const PlainLayout = Layout;
export {
  PlainLayout,
};
