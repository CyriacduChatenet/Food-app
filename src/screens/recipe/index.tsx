import { RouteProp, useRoute } from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Navbar from '../../components/navbar';
import useFetch from '../../hooks/useFetch';
import { RoutesParams } from '../../routes';

const RecipeScreen: FC = () => {
  const route = useRoute<RouteProp<RoutesParams, "Recipe">>()
  const [data, setData] = useState([]);

  console.log(route);
  

  useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params?.id}`, setData);
  return (
    <SafeAreaView>
      {data.map((recipe : any) => <View key={recipe.idMeal}>
        <Image source={{uri : recipe.strMealThumb}} style={{width : 400, height : 200}} />
        <Text>{recipe.strMeal}</Text>
      </View>)}
    </SafeAreaView>
  );
};

export default RecipeScreen;
