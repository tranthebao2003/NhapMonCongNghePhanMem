import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontSize from "../FontSize";
import Color from "../Color";
import { screenWidth, screenHeight } from "../DimensionsScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginAction
} from "../../redux/action/LoginAction";

import Spinner from 'react-native-loading-spinner-overlay';
import Dialog from "react-native-dialog";

const Login = (props) => {
  const { navigation } = props;
  const {loading} = useSelector(state => state.authReducer)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{color: 'white', fontSize: FontSize.sizeHeader}}
      />
      <ImageBackground
        source={require("../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <BannerComponent />
          <MainComponent navigation={navigation} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const BannerComponent = ({}) => {
  return (
    <View
      style={{
        width: "100%",
        height: 0.4 * screenHeight,
        justifyContent: "flex-end",
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={require("../../resource/iconLogin/lotLogo2.png")}
          style={{
            height: 100,
            width: 100,
            position: "absolute",
            left: screenWidth / 2 - 50,
            top: -140,
            zIndex: 1,
          }}
          resizeMode="contain"
        ></Image>
        <Image
          source={require("../../resource/iconLogin/logo.png")}
          style={{
            height: 100,
            width: 100,
            position: "absolute",
            left: screenWidth / 2 - 50,
            top: -140,
            borderRadius: 16,
            zIndex: 2,
          }}
          resizeMode="contain"
        ></Image>
      </View>
      <Image
        source={require("../../resource/iconLogin/decorTopLeft.png")}
        style={{
          height: 500,
          width: 500,
          position: "absolute",
          top: -180,
          left: -147,
          zIndex: -1,
        }}
        resizeMode="contain"
      ></Image>
      <View style={styles.containerHeader}>
        <Text style={styles.header}>Hi!</Text>
        <Text style={styles.header}>Welcome Black,</Text>
      </View>
    </View>
  );
};

const MainComponent = ({ navigation }) => {

  const {error, loading} = useSelector(state => state.authReducer)


  const [dialogError, setDialogError] = useState(false);
  const [contentError, setContenError] = useState('')

  const functionBtnLogin = () => {
     dispatch(LoginAction(userName, password))
  }
  
    useEffect(() => {
      if(error != null){
        setDialogError(true)
        setContenError(error)
      }
    }, [error, loading])

  const [userName, setUserName] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(true);
  const changeIconPassword = () => setVisiblePassword(!visiblePassword);


  const [password, onChangePassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const verifyPassword = (password) => {
    // regexPassword: Minimum eight characters, at least one uppercase letter,
    // one lowercase letter and one number:
    let regexPassword = new RegExp(
      /((?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$)/
    );
    if (regexPassword.test(password)) {
      return true;
    }
    return false;
  };

  const dispatch = useDispatch()

  const navigateForgotPassword = () => navigation.navigate("forgotPassword");

  return (
    <View style={{ height: 0.6 * screenHeight, paddingHorizontal: 25 }}>
      {/* username and password */}
      <View style={styles.containerMain}>
        <View style={styles.containerUserName}>
          {/* nếu autoFocus = {true} thì khi component được gắn thì nó sẽ tự động focus */}
          <TextInput
            style={styles.username}
            placeholder="Username"
            placeholderTextColor={Color.colorTextMain}
            autoFocus={true}
            autoCapitalize="none"
            onChangeText={(username) => {
              setUserName(username);
            }}
            // value này để hiển thị lên user
            value={userName}
          ></TextInput>
        </View>

        <View style={styles.containerPassword}>
          <TextInput
            style={styles.password}
            placeholder="Password"
            placeholderTextColor={Color.colorTextMain}
            secureTextEntry={visiblePassword}
            onChangeText={(password) => {
              onChangePassword(password);
              const isValidPw = verifyPassword(password);
              isValidPw ? setIsValidPassword(true) : setIsValidPassword(false);
            }}
            // value này để hiển thị lên user
            value={password}
          ></TextInput>

          {isValidPassword === false ? (
            <View
              style={{
                top: 26,
                position: "absolute",
                marginTop: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#ff5252",
                  fontWeight: "500",
                }}
              >
                Password phải đủ 8 kí tự trong đó ít nhất 1 chữ số,
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#ff5252",
                  fontWeight: "500",
                }}
              >
                1 chữ hoa và 1 chữ thường
              </Text>
            </View>
          ) : (
            ""
          )}

          <TouchableOpacity onPress={changeIconPassword}>
            {visiblePassword ? (
              <Image
                source={require("../../resource/iconLogin/eyeHide.png")}
                style={styles.eye}
                resizeMode="contain"
              ></Image>
            ) : (
              <Image
                source={require("../../resource/iconLogin/eyeShow.png")}
                style={styles.eye}
                resizeMode="contain"
              ></Image>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* btn login and forgot password */}

      <View style={styles.containerBtnLoginFooter}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={functionBtnLogin}
        >
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity onPress={navigateForgotPassword}>
            <Text style={styles.footerSignUp}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Dialog.Container visible={dialogError}>
          <Dialog.Title
            style={{ color: Color.colorTextMain, fontWeight: "700" }}
          >
            THÔNG BÁO
          </Dialog.Title>
          <Dialog.Description style={{ color: "black" }}>
            {contentError}
          </Dialog.Description>
          <Dialog.Button
            label="Ok"
            onPress={() => setDialogError(!dialogError)}
            style={[
              styles.btnCancel,
              {
                width: 60,
                height: 40,
                marginRight: 30,
                fontWeight: 500,
                fontSize: 18,
              },
            ]}
          />
        </Dialog.Container>
      </View>

      <View style={{ flex: 1 }}>
        <Image
          source={require("../../resource/iconLogin/decorBottomRight.png")}
          style={{
            height: 650,
            width: 400,
            position: "absolute",
            bottom: -190,
            right: -200,
            zIndex: -1,
          }}
          resizeMode="contain"
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerHeader: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  header: {
    fontSize: FontSize.sizeHeader,
    fontWeight: "700",
    color: Color.colorTextMain,
  },

  containerMain: {
    justifyContent: "center",
    alignItems: "center",
  },

  containerUserName: {
    width: "100%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBorder,
    marginBottom: 45,
  },

  username: {
    width: "100%",
    fontSize: 20,
    color: Color.colorTextMain,
  },

  containerPassword: {
    width: "100%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBorder,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  password: {
    fontSize: 20,
    color: Color.colorTextMain,
    width: "85%",
  },

  eye: {
    height: 26,
    width: 26,
  },

  containerForgot: {
    justifyContent: "flex-end",
    width: "100%",
  },

  forgot: {
    fontSize: FontSize.sizeSmall,
    color: Color.colorTextMain,
    alignSelf: "flex-end",
  },

  containerBtnLoginFooter: {
    margin: 80,
    alignItems: "center",
  },
  btnLogin: {
    width: 90 * 2,
    height: 30 * 1.6,
    borderRadius: 40,
    backgroundColor: Color.colorBtn,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Color.colorTextMain,
    shadowOffset: { width: 500, height: 500 },
    shadowOpacity: 0.8,
    elevation: 0.8,
  },

  login: {
    fontSize: FontSize.sizeSmall + 2,
    fontWeight: "700",
    color: Color.colorTextMain,
  },

  footer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  footerText: {
    fontSize: FontSize.sizeSmall,
    color: Color.colorTextMain,
    marginRight: 6,
  },

  footerSignUp: {
    fontSize: FontSize.sizeSmall,
    color: Color.colorTextMain,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorTextMain,
  },
});

export default Login;
