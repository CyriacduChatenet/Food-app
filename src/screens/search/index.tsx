import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useState } from "react";
import { Button, FlatList, Image, ListRenderItem, SafeAreaView, Text, TextInput, View } from "react-native";
import Searchbar from "../../components/searchbar";
import { RoutesParams } from "../../routes";

const SearchScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);

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
    <SafeAreaView>
      <View>
        <Text>Search page</Text>
        <Searchbar mutator={setSearchValue} dataMutator={setData} />
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.strIdMeal} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
