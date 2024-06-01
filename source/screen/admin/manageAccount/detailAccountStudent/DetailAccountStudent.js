import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Dialog from "react-native-dialog";
import { useState, useEffect } from "react";
import FontSize from "../../../../component/FontSize";
import Color from "../../../../component/Color";
import {
  screenWidth,
  screenHeight,
} from "../../../../component/DimensionsScreen";

// 2 cách:
// - ListView from a map of objects
// - FlatList
export default function DetailAccountStudent(props) {
  const {
    MSSV,
    first_name,
    last_name,
    phone,
    email,
    role_id,
    status_id,
    address,
    class_id,
    gender_id,
    birth_date,
  } = props.route.params.detailAccountStudent;

  const { navigation } = props;

  const [trangThaiTk, setTrangThaiTK] = useState("");
  useEffect(() => {
    if (status_id == 1) {
      setTrangThaiTK("Hoạt động");
    } else if (status_id == 2) {
      setTrangThaiTK("Bị khóa");
    }
  }, []);

  const [gioiTinh, setgioiTinh] = useState("");
  useEffect(() => {
    if (gender_id == "1") {
      setgioiTinh("Nam");
    } else if (gender_id == "2") {
      setgioiTinh("Nữ");
    }
  }, []);

  const [chucVu, setChucVu] = useState();
  useEffect(() => {
    if (role_id == 3) {
      setChucVu("Bí thư (trưởng CLB)");
    } else if (role_id == 2) {
      setChucVu("Sinh viên");
    }
  }, []);


  // btn remove
  const [dialogRemove, setDialogRemove] = useState(false);
  const showHideDialogRemove = () => {
    setDialogRemove(!dialogRemove);
  };

  const [yesNotificationRemove, setYesNotificationRemove] = useState(false);
  const yesBtnRemove = () => {
    // let save
    setDialogRemove(!dialogRemove);
    setYesNotificationRemove(!yesNotificationRemove);

    // mik phải để cho nó hiện thông báo tầm 3s trước khi chuyển text
    // nếu ko nó sẽ bị lỗi ấn đồng ý duyệt thì nó lại nhảy ra
    // dialog xóa sv thành công

    setTimeout(() => {
      setYesNotificationRemove(false);
      navigation.goBack();
    }, 2500);
  };

  // btn lock
  const [dialogLock, setDialogLock] = useState(false);
  const showHideDialogLock = () => {
    setDialogLock(!dialogLock);
  };

  const [yesNotificationLock, setYesNotificationLock] = useState(false);
  const yesBtnLock = () => {
    setDialogLock(!dialogLock);
    setYesNotificationLock(!yesNotificationLock);

    setTimeout(() => {
      setYesNotificationLock(false);
      navigation.goBack();
    }, 2500);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../../../../resource/iconListActive/decorTop.png")}
        style={{
          height: 900,
          width: 600,
          position: "absolute",
          top: -220,
          right: -100,
          zIndex: 1,
        }}
        resizeMode="contain"
      ></Image>
      <ImageBackground
        source={require("../../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Chi tiết tài khoản</Text>
          <Image
            source={require("../../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../../resource/iconLogin/logo.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              borderRadius: 16,
              zIndex: 2,
            }}
          ></Image>
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
            elevation: 2,
            zIndex: 2,
          }}
        >
          {/* header row*/}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: "600",
              }}
            >
              Mã số sinh viên
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: "600",
              }}
            >
              Tên sinh viên
            </Text>
          </View>

          {/* content row */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              flexDirection: "row",
              borderTopWidth: 0.5,
              borderColor: Color.colorTextMain,
              paddingTop: 26,
              paddingBottom: 13,
            }}
          >
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Text style={styles.contentText}>{MSSV}</Text>
            </View>

            <View
              style={{
                backgroundColor: Color.colorBtn,
              }}
            >
              <Text style={styles.contentText}>
                {first_name + " " + last_name}
              </Text>
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
                marginBottom: 2,
              }}
            >
              Email
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {email}
            </Text>
          </View>

          {/* trạng thái tài khoản */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Trạng thái tài khoản
            </Text>

            <Text
              style={{
                color:
                  trangThaiTk === "Bị khóa" ? Color.colorTextLock : "#35A29F",
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {trangThaiTk}
            </Text>
          </View>

          {/* giới tính*/}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Giới tính
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {gioiTinh}
            </Text>
          </View>

          {/* số điện thoại*/}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Số điện thoại
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {phone}
            </Text>
          </View>

          {/* mã lớp */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Mã lớp
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {class_id}
            </Text>
          </View>

          {/* ngày sinh */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Ngày sinh
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {birth_date}
            </Text>
          </View>

          {/* địa chỉ */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Địa chỉ
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {address}
            </Text>
          </View>

          {/* chức vụ */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Chức vụ
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: "400",
              }}
            >
              {chucVu}
            </Text>
          </View>
        </View>

        {/* buttons */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* remove sinh viên khỏi hđ */}

          <TouchableOpacity
            style={styles.btnCancel}
            onPress={showHideDialogRemove}
          >
            <Text style={[styles.resigter, { color: Color.colorRemove }]}>
              Xóa tài khoản
            </Text>
            <Dialog.Container visible={dialogRemove}>
              <Dialog.Title
                style={{ color: Color.colorTextMain, fontWeight: "700" }}
              >
                XÁC NHẬN
              </Dialog.Title>
              <Dialog.Description
                style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
              >
                Bạn có muốn xóa tài khoản này không ?
              </Dialog.Description>
              <Dialog.Button
                label="No"
                onPress={showHideDialogRemove}
                style={[
                  styles.btnCancel,
                  {
                    width: 60,
                    height: 40,
                    marginRight: 30,
                    fontWeight: 500,
                    fontSize: 18,
                    color: Color.colorRemove,
                  },
                ]}
              />
              <Dialog.Button
                label="Yes"
                onPress={yesBtnRemove}
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
            <Dialog.Container visible={yesNotificationRemove}>
              <Dialog.Title
                style={{
                  color: Color.colorTextMain,
                  fontWeight: "700",
                  fontSize: FontSize.sizeMain - 2,
                }}
              >
                THÔNG BÁO
              </Dialog.Title>
              <Dialog.Description
                style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
              >
                Bạn đã xóa sinh viên thành công !
              </Dialog.Description>
            </Dialog.Container>
          </TouchableOpacity>

          {/* btn lock */}
          {status_id == 1 ? (
            <TouchableOpacity
              style={[
                styles.btnResigter,
                {
                  backgroundColor: Color.colorBtnLock,
                },
              ]}
              onPress={showHideDialogLock}
            >
              <Text
                style={[
                  styles.resigter,
                  {
                    color: Color.colorTextLock,
                  },
                ]}
              >
                Khóa tài khoản
              </Text>
              <Dialog.Container visible={dialogLock}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn có chắc muốn khóa tài khoản này?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogLock}
                  style={[
                    styles.btnCancel,
                    {
                      width: 60,
                      height: 40,
                      marginRight: 30,
                      fontWeight: 500,
                      fontSize: 18,
                      color: Color.colorRemove,
                    },
                  ]}
                />
                <Dialog.Button
                  label="Yes"
                  // call api, sau đó chuyển ko duyệt thành xóa
                  onPress={yesBtnLock}
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
              <Dialog.Container visible={yesNotificationLock}>
                <Dialog.Title
                  style={{
                    color: Color.colorTextMain,
                    fontWeight: "700",
                    fontSize: FontSize.sizeMain - 2,
                  }}
                >
                  THÔNG BÁO
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn đã khóa tài khoản thành công!
                </Dialog.Description>
                <Dialog.Button
                  label="Ok"
                  onPress={() =>
                    setYesNotificationLock(!yesNotificationLock)
                  }
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
            </TouchableOpacity>
          ) : (
            // btn unlock
            <TouchableOpacity
              style={[
                styles.btnResigter,
                {
                  backgroundColor: Color.colorBgUiTap,
                },
              ]}
              onPress={showHideDialogLock}
              
            >
              <Text
                style={[
                  styles.resigter,
                  {
                    color:Color.colorTextMain,
                  },
                ]}
              >
                Mở tài khoản
              </Text>
              <Dialog.Container visible={dialogLock}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn có chắc muốn mở tài khoản này?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogLock}
                  style={[
                    styles.btnCancel,
                    {
                      width: 60,
                      height: 40,
                      marginRight: 30,
                      fontWeight: 500,
                      fontSize: 18,
                      color: Color.colorRemove,
                    },
                  ]}
                />
                <Dialog.Button
                  label="Yes"
                  // call api, sau đó chuyển ko duyệt thành xóa
                  onPress={yesBtnLock}
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
              <Dialog.Container visible={yesNotificationLock}>
                <Dialog.Title
                  style={{
                    color: Color.colorTextMain,
                    fontWeight: "700",
                    fontSize: FontSize.sizeMain - 2,
                  }}
                >
                  THÔNG BÁO
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn đã mở tài khoản thành công!
                </Dialog.Description>
                <Dialog.Button
                  label="Ok"
                  onPress={() =>
                    setYesNotificationLock(!yesNotificationLock)
                  }
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
            </TouchableOpacity>
          )}
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
    height: (1 / 6) * screenHeight,
    padding: 30,
    paddingRight: 150,
    zIndex: 2,
    width: screenWidth,
    marginBottom: 20,
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
    borderColor: Color.colorRemove,
  },

  btnResigter: {
    width: 85 * 2,
    height: 30 * 1.6,
    borderRadius: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Color.colorTextMain,
    shadowOffset: { width: 500, height: 500 },
    shadowOpacity: 0.8,
    elevation: 2,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
  },
});