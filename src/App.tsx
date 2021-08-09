import 'react-native-gesture-handler';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { customLightTheme, customDarkTheme } from './theme/customTheme';

import { BottomNavigator } from './navigations/BottomNavigator';
import { store, persistor } from './configs/redux/store';
import { useAppSelector } from './hooks/reduxHooks';
import { selectThemeType } from './features/ui/uiSlice';

const ThemeProvider = ({ children }: any) => {
  const themeType = useAppSelector(selectThemeType);
  return (
    <ApplicationProvider
      {...eva}
      theme={themeType === 'light' ? customLightTheme : customDarkTheme}>
      {children}
    </ApplicationProvider>
  );
};

export default (): React.ReactFragment => {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ThemeProvider>
            <BottomNavigator />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
};
