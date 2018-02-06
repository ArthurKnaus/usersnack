import { Provider as StoreProvider } from 'react-redux';
import ThemeProvider from './theme';
import store from './store';

import { Layout } from './components';
import AppRoutes from './AppRoutes';

const App = () => (
  <ThemeProvider>
    <StoreProvider store={store}>
      <Layout>
        <AppRoutes />
      </Layout>
    </StoreProvider>
  </ThemeProvider>
);

export default App;
