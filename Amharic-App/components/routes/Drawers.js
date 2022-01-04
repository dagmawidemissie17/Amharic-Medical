import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/AntDesign";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Drawer = createDrawerNavigator();

export const DefaultDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Group
        screenOptions={({ route }) => ({
          headerShown: true,
          drawerIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home ") {
              iconName = "home";
            } else if (route.name === "About") {
              iconName = "questioncircle";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerStyle: { backgroundColor: "#0176ae" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        })}
      >
        <Drawer.Screen
          name="Home "
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 208, height: 50 }}
                source={{
                  uri: "https://static-s.aa-cdn.net/img/gp/20600002103451/esqyeWoSakXYjV4w8oLgg2sGkohRxXtCHSIcEl-1Gh0sE0PdQueb6TJ0r5XN8UDwSw=s300?v=1",
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={"white"}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
