import React, {FC, useState} from 'react';
import {Button, FlatList, Image, ListRenderItem, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RoutesParams} from '../../routes';
import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/navbar';

const HomeScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
  const [data, setData] = useState<never[]>([]);

  useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', setData);

  const renderItem: ListRenderItem<any> = ({item}) => {
    return <View key={item.strMeal}>
      <Image source={{uri : item.strMealThumb}} style={{width: 400, height: 200}} />
      <Text>{item.strMeal}</Text>
      <Button title={'Recipe'} onPress={() => navigation.navigate('Recipe', {
        id : item.idMeal
      })} />
    </View>
  };
  return (
    <View>
      <Navbar />
      <Text>Home page</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.strIdMeal} />
    </View>
  );
};

export default HomeScreen;
