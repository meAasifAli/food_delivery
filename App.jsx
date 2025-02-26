import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/config/AppNavigator';
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;


