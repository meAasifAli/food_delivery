import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/config/AppNavigator';
import { initialiseSocket } from "./src/config/socket"
import { useEffect } from 'react';

const App = () => {
  const token = store.getState().auth.token


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;


