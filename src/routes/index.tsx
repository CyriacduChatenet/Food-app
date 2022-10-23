import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import HomeScreen from '../screens/home';
import RecipeScreen from '../screens/recipe';

export type RoutesParams = {
  Home: undefined;
  Recipe: {
    id : string;
  };
};

const Stack = createNativeStackNavigator<RoutesParams>();

const Router: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Group>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Recipe'} component={RecipeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
