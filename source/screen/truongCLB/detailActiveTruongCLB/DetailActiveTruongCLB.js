import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Dialog from "react-native-dialog";
import { useState, useEffect } from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import moment from 'moment'
import RegisterActiveAction from '../../../redux/action/registerCancelActiveAction/RegisterActiveAction'
import Spinner from 'react-native-loading-spinner-overlay'
import {REGISTER_ACTIVE_RESET}from '../../../redux/types/typesRegisterCancelActive/TypesRegisterActive'
import { CommonActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function DetailActiveTruongCLB(props) {
  const{navigation} = props
  const dispatch = useDispatch()
  const { loading, reponseSuccess, error } = useSelector(
    (state) => state.registerActiveReducer
  );
  
  const {
    id,
    act_name,
    act_description,
    act_address,
    act_price,
    act_status,
    act_time,
    amount,
    creater_id,
    audit_id,
    createdAt,
    updatedAt,
    organization
  } = props.route.params.detailActiveTruongCLB;

  const registerActive = () => {
    const activeId = {
      act_id: id
    }
    dispatch(RegisterActiveAction(activeId))
  };


  // resigter
  useEffect(() => {
    dispatch({ type: REGISTER_ACTIVE_RESET });
  }, [dispatch]);

  useEffect(() => {
    if (error != null && loading == false) {
      Alert.alert("Thông báo", error);
      dispatch({ type: REGISTER_ACTIVE_RESET });
    } else if(reponseSuccess == true && loading == false){
      Alert.alert("Bạn đã đăng kí thực hiện thành công");
      navigation.goBack()
    }
  }, [error, loading, reponseSuccess]);

  // btn resigter
  const [dialogResigter, setDialogRegister] = useState(false);
  const showHideDialogRegister = () => {
    setDialogRegister(!dialogResigter);
  };

  const yesBtnResigter = () => {
    setDialogRegister(!dialogResigter);
    registerActive()
  };

  const isoDate = act_time;
  const formatAct_time = moment(isoDate).format('DD/MM/YYYY');

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
      <Image
        source={require("../../../resource/iconListActive/decorTop.png")}
        style={{
          height: 800,
          width: 600,
          position: "absolute",
          top: -220,
          right: -100,
          zIndex: 1,
        }}
        resizeMode="contain"
      ></Image>
      <ImageBackground
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Chi tiết hoạt động</Text>
        </View>
        {/* content 1 */}
        <View
          style={{
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            marginBottom: 50,
            padding: 20,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
          }}
        >
          {/* header row*/}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: 'space-between',
              
            }}
          >
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 15,
              }}
            >
              Tên hoạt động
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 30,
              }}
            >
              Thời gian
            </Text>
          </View>

          {/* content row */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              borderTopWidth: 0.5,
              borderColor: Color.colorTextMain,
              paddingTop: 26,
              paddingBottom: 13,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                width: '50%'
              }}
            >
              <Text style={styles.contentText}>{act_name}</Text>
            </View>

            <View
              style={{
                width: '35%',        
                alignSelf: 'flex-end',
                backgroundColor: Color.colorBtn,
              }}
            >
              <Text style={styles.contentText}>{formatAct_time}</Text>
            </View>
          </View>
        </View>

        {/* content 2 */}
        <View
          style={{
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            padding: 20,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
          }}
        >
          {/* header column */}

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Địa điểm
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {act_address}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Số lượng
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {amount}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Đơn vị tổ chức
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {organization}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Lệ phí
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {act_price == null ? 0 : act_price}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Mô tả
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {act_description}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >

          {/* btn resigter */}
          <TouchableOpacity
            style={styles.btnResigter}
            onPress={showHideDialogRegister}
          >
            <Text style={styles.resigter}>Đăng kí</Text>
            <Dialog.Container visible={dialogResigter}>
              <Dialog.Title
                style={{ color: Color.colorTextMain, fontWeight: "700" }}
              >
                XÁC NHẬN
              </Dialog.Title>
              <Dialog.Description style={{ color: "black" }}>
                Bạn có chắc muốn tham gia?
              </Dialog.Description>
              <Dialog.Button
                label="No"
                onPress={showHideDialogRegister}
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
              <Dialog.Button
                label="Yes"
                onPress={yesBtnResigter}
                style={{
                  width: 60,
                  height: 40,
                  marginRight: 50,
                  borderRadius: 5,
                  backgroundColor: "#d9ebfe",
                  fontWeight: 500,
                  fontSize: 18,
                }}
              />
            </Dialog.Container>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  containerHeader: {
    height: (1 / 10) * screenHeight,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    zIndex: 2,
  },
  header: {
    fontSize: FontSize.sizeHeader,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
  contentText: {
    color: Color.colorTextMain,
    fontSize: FontSize.sizeMain,
    fontWeight: "400",
  },
  btnCancel: {
    width: 85 * 2,
    height: 30 * 1.6,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#437173",
  },

  btnResigter: {
    width: 85 * 2,
    height: 30 * 1.6,
    borderRadius: 10,
    margin: 20,
    backgroundColor: Color.colorBgUiTap,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Color.colorTextMain,
    shadowOffset: { width: 500, height: 500 },
    shadowOpacity: 0.8,
    elevation: 0.8,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});
