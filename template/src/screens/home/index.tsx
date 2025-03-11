import React from 'react';
import {Text, View} from 'react-native';
import locale from '../../localization/locale';
import {Button, ArrowLeftIcon} from 'etendo-ui-library';
import { IFile } from '../../interfaces';
import { styles } from './style';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}

interface HomeProps {
  navigationContainer: NavigationContainerProps;
  sharedFiles: IFile[];
}

const Home: React.FC<HomeProps> = ({ navigationContainer, sharedFiles }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{locale.t('Home.welcome')}</Text>
      <Button
        typeStyle={'primary'}
        text={locale.t('Home.back')}
        iconLeft={<ArrowLeftIcon />}
        onPress={() => {
          navigationContainer.navigate('Home');
        }}
      />
    </View>
  );
};

export default Home;