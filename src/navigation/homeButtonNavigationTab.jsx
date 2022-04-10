import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeApp from "../home/home";
import { Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
import iconTiktok from "../../source/image/iconTiktok.jpg";
const HomeButtonTabNavigation = () => {
  const uri = "./src";
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 40,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeApp}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialIcons name="home" color="white" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={HomeApp}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <MaterialIcons name="search" color="white" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={"Upload"}
        component={HomeApp}
        options={{
          tabBarIcon: () => (
            <Image
              source={iconTiktok}
              style={{ height: 38, resizeMode: "contain" }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={"Massage"}
        component={HomeApp}
        options={{
          tabBarLabel: "Massage",
          tabBarIcon: () => (
            <MaterialIcons name="chat" color="white" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={HomeApp}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialIcons name="person-outline" color="white" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeButtonTabNavigation;
