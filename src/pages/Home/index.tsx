import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import { styles } from '../Home/styles';
import { NativeScreenContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = () =>{
    function HomeScreen({navigation}){
    return(
        <view style={{flex:1,alingItens:'center',justifyContent:'center'}}>
            <text>{'Home'}</text>
            <button
                title='Go to Details'
                onProgress={() =>navigation.navigate('Details')}
                />
        </view>

    );

}
export default Home;