import React from "react";
import { Form, Home, Map } from "./screen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#04364A'
      barStyle={{ backgroundColor: '#176B87' }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Form'
        component={Form}
        options={{
          tabBarLabel: "Form",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='page-layout-footer' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Map'
        component={Map}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='map-marker' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
