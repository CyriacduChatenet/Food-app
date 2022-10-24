import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import HomeScreen from '../screens/home';
import RecipeScreen from '../screens/recipe';
import SearchScreen from '../screens/search';

export type RoutesParams = {
  Home: undefined;
  Recipe: {
    id : string;
  };
  Search: undefined;
};

const Stack = createNativeStackNavigator<RoutesParams>();

const Router: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Group>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Recipe'} component={RecipeScreen} />
          <Stack.Screen name={'Search'} component={SearchScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
