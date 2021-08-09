import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Toggle } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/Navigator';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectThemeType, toggleThemeType } from '../../features/ui/uiSlice';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const dispatch = useAppDispatch();

  const isDarkTheme = useAppSelector(selectThemeType) === 'dark';

  const handleToggleTheme = () => dispatch(toggleThemeType());

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails} status="primary" style={{ marginBottom: 10 }}>
          OPEN DETAILS
        </Button>
        <Toggle checked={isDarkTheme} onChange={handleToggleTheme}>
          {isDarkTheme ? 'Dark mode' : 'Light mode'}
        </Toggle>
      </Layout>
    </SafeAreaView>
  );
};
