import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigations/BottomNavigator';

type HomeDetailScreenProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

export const HomeDetailScreen = () => {
  const navigation = useNavigation<HomeDetailScreenProp>();

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};
