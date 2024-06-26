import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Color from "../../../component/Color";
import  ListAccountStudent  from './accountStudent/ListAccountStudent'
import  ListAccountDT  from './accountDT/ListAccountDT'
import SelectTypeAccount from "./createAccount/SelectTypeAccount";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

function UITapManageAccount(props) {

  const { showKeyBoard } = useSelector((state) => state.keyboardShow);
  return (
      <Tab.Navigator
        initialRouteName="listAccountStudent"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Color.colorBgUiTap,
            position: "absolute",
            padding: 10,
            bottom: showKeyBoard ? -50 : 0,
          },
        }}
      >
        {/* account student*/}
        <Tab.Screen
          name="listAccountStudent"
          component={ListAccountStudent}
          
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../../../resource/iconUITapManageAccount/accountStudent.png")}
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },
            
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? Color.colorTextMain : Color.inactive,
                    fontWeight: "600",
                  }}
                >
                  Tài khoản SV
                </Text>
              );
            },
          }}
        />

        {/* account đoàn trường */}
        <Tab.Screen
          name="listAccountDT"
          component={ListAccountDT}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../../../resource/iconUITapManageAccount/accountDT.png")}
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },

            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? Color.colorTextMain : Color.inactive,
                    fontWeight: "600",
                  }}
                >
                  Tài khoản ĐT
                </Text>
              );
            },
          }}
        />

        {/* add account */}
        <Tab.Screen
          name="selectTypeAccount"
          component={SelectTypeAccount}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../../../resource/iconUITapManageAccount/addAcount.png")}
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                  }}
                  resizeMode="cover"
                ></Image>
              );
            },

            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: 14,
                    color: focused ? Color.colorTextMain : Color.inactive,
                    fontWeight: "600",
                  }}
                >
                  Tạo tài khoản
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
  );
}

export { UITapManageAccount };
