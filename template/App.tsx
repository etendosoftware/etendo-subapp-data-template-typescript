import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import locale from './src/localization/locale';
import { IData, IFile, INavigationContainerProps } from './src/interfaces';
import ProductService from './lib/data_gen/productservice';
import Home from './src/screens/home';

interface AppProps {
  language: string;
  dataUser: IData;
  navigationContainer: INavigationContainerProps;
  token: string;
  url: string;
  sharedFiles: IFile[];
}

const App = ({
  language,
  navigationContainer,
  dataUser,
  token,
  url,
  sharedFiles,
}: AppProps) => {
  const Stack = createStackNavigator();

  locale.init();
  locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));
  ProductService.BACK.authToken = token;
  ProductService.BACK.url = url;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        initialParams={{ dataUser }}>
        {props => <Home {...props} navigationContainer={navigationContainer} sharedFiles={sharedFiles} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export { App };
export default App;
