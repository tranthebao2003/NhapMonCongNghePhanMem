import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LOGIN_SUCCESS} from '../redux/types/TypesLogin'

// resource 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import SetAuthToken from "./SetAuthToken";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ChangePassword from "./ChangePassword";

// Xác minh
import Login from '../component/welcome/Login';
import ForgotPassword from '../component/welcome/ForgotPassword';
import ForgotPassword2 from '../component/welcome/ForgotPassword2';

// Sinh viên
import {UITapSinhVien} from '../screen/user/UITapSinhVien'
import DetailActive from '../screen/user/detailActive/DetailActive'
import DetailActived from '../screen/user/detailActived/DetailActived'

// Trưởng câu lạc bộ
import { UITapTruongCLB } from '../screen/truongCLB/UITapTruongCLB';
import Form2CreateActiveTruongCLB from'../screen/truongCLB/formCreateActive/Form2CreateActiveTruongCLB'

import  ListActiveTruongCLB  from '../screen/truongCLB/listActiveTruongCLB/ListActiveTruongCLB';
import  DetailActiveTruongCLB  from '../screen/truongCLB/detailActiveTruongCLB/DetailActiveTruongCLB';

import  ListActiveCreatedTruongCLB  from '../screen/truongCLB/listActiveCreatedTruongCLB/ListActiveCreatedTruongCLB';
import  DetailActiveCreated  from '../screen/truongCLB/detailActiveCreated/DetailActiveCreated';

import  ListApproveSvTruongCLB  from '../screen/truongCLB/listApproveTruongCLB/ListApproveSvTruongCLB';
import  DetailApproveSvTruongCLB  from '../screen/truongCLB/detailApproveSvTruongCLB/DetailApproveSvTruongCLB';

import  ListThongKeHoatDong  from '../screen/truongCLB/thongKeHoatDong/ListThongKeHoatDong';
import  DetailThongKeHoatDong  from '../screen/truongCLB/detailThongKeHoatDong/DetailThongKeHoatDong';

import  From1EditActiveTruongCLB  from '../screen/truongCLB/editActiveTruongCLB/From1EditActiveTruongCLB';
import  From2EditActiveTruongCLB  from '../screen/truongCLB/editActiveTruongCLB/From2EditActiveTruongCLB';

import  DetailActivedTruongCLB  from '../screen/truongCLB/detailActivedTruongCLB/DetailActivedTruongCLB';
import  DetailStudentRegisterTruongCLB  from '../screen/truongCLB/listApproveTruongCLB/listStudentRegisterTruongCLB/DetailStudentRegisterTruongCLB';
import  ListStudentRegisterTruongCLB  from '../screen/truongCLB/listApproveTruongCLB/listStudentRegisterTruongCLB/ListStudentRegisterTruongCLB';

// Đoàn trường
import { UITapDoanTruong } from '../screen/doanTruong/UITapDoanTruong';
import Form2CreateActiveDT from '../screen/doanTruong/formCreateActive/Form2CreateActiveDT'
import ScreenListActivedTruongCLB from "../screen/truongCLB/listActivedTruongCLB/ScreenListActivedTruongCLB";


import DetailActiveDoanTruong from '../screen/doanTruong/detailActive/DetailActiveDoanTruong'

import ScreenListDoanTruong from "../screen/doanTruong/listActive/ScreenListDoanTruong"
import ListActiveCreatedDT from "../screen/doanTruong/listActiveCreated/ListActiveCreatedDT";
import ListActiveApproveDT from "../screen/doanTruong/listActiveApprove/ListActiveApproveDT";
import DetailActiveApprove from "../screen/doanTruong/detailActiveApprove/DetailActiveApprove";
import ListOrganizedActiveDT from "../screen/doanTruong/listOrganizedActive/ListOrganizedActiveDT";
import DetailOrganizedActive from "../screen/doanTruong/detailOrganizedActive/DetailOrganizedActive";
import ListApproveSvDT  from '../screen/doanTruong/listApproveSvDT/ListApproveSvDT'
import ListStudentRegisterDT  from '../screen/doanTruong/listApproveSvDT/listStudentRegisterDT/ListStudentRegisterDT'

import From1EditActiveDoanTruong from "../screen/doanTruong/editActiveDoanTruong/From1EditActiveDoanTruong";
import From2EditActiveDoanTruong from "../screen/doanTruong/editActiveDoanTruong/From2EditActiveDoanTruong";

import DetailActiveCreatedDT from "../screen/doanTruong/detailActiveCreated/DetailActiveCreatedDT";
import DetailStudentRegisterDT from "../screen/doanTruong/listApproveSvDT/listStudentRegisterDT/DetailStudentRegisterDT";



// Admin
import { UITapAdmin } from '../screen/admin/UITapAdmin';
import  Form2CreateActiveAdmin  from '../screen/admin/formCreateActive/Form2CreateActiveAdmin';

import  ListActiveAdmin  from '../screen/admin/listActive/ListActiveAdmin'
import  DetailActiveAdmin  from '../screen/admin/detailActive/DetailActiveAdmin'

import  ListActiveCreatedAdmin  from '../screen/admin/listActiveCreated/ListActiveCreatedAdmin'
import  DetailActiveCreatedAdmin  from '../screen/admin/detailActiveCreated/DetailActiveCreatedAdmin'

import  ListActiveApproveAdmin  from '../screen/admin/listActiveApprove/ListActiveApproveAdmin'
import  DetailActiveApproveAdmin  from '../screen/admin/detailActiveApprove/DetailActiveApproveAdmin'

import  ListOrganizedActiveAdmin  from '../screen/admin/listOrganizedActive/ListOrganizedActiveAdmin'
import  DetailOrganizedActiveAdmin  from '../screen/admin/detailOrganizedActive/DetailOrganizedActiveAdmin'

import  {UITapManageAccount}  from '../screen/admin/manageAccount/UITapManageAccount'


import  ListApproveSvAdmin  from '../screen/admin/listApproveSvAdmin/ListApproveSvAdmin'
import  DetailApproveSvAdmin  from '../screen/admin/detailApproveSvAdmin/DetailApproveSvAdmin'

import  From1EditActiveAdmin  from '../screen/admin/editActiveAdmin/From1EditActiveAdmin'
import  From2EditActiveAdmin  from '../screen/admin/editActiveAdmin/From2EditActiveAdmin'

import  Form1CreateStudent  from '../screen/admin/manageAccount/createAccount/createStudent/Form1CreateStudent'
import  Form2CreateStudent  from '../screen/admin/manageAccount/createAccount/createStudent/Form2CreateStudent'
import  Form3CreateStudent  from '../screen/admin/manageAccount/createAccount/createStudent/Form3CreateStudent'

import  FormEditAcountStudent  from '../screen/admin/manageAccount/editAccount/editStudent/FormEditAcountStudent'
import  Form2EditStudent  from '../screen/admin/manageAccount/editAccount/editStudent/Form2EditStudent'
import  Form3EditStudent  from '../screen/admin/manageAccount/editAccount/editStudent/Form3EditStudent'

import  Form1CreateDoanTruong  from '../screen/admin/manageAccount/createAccount/createDoanTruong/Form1CreateDoanTruong'
import  Form2CreateDoanTruong  from '../screen/admin/manageAccount/createAccount/createDoanTruong/Form2CreateDoanTruong'
import  Form3CreateDoanTruong  from '../screen/admin/manageAccount/createAccount/createDoanTruong/Form3CreateDoanTruong'

import  FormEditAcountDT  from '../screen/admin/manageAccount/editAccount/editDT/FormEditAcountDT'
import  Form2EditDoanTruong  from '../screen/admin/manageAccount/editAccount/editDT/Form2EditDoanTruong'
import  Form3EditDoanTruong  from '../screen/admin/manageAccount/editAccount/editDT/Form3EditDoanTruong'

import  DetailAccountStudent  from '../screen/admin/manageAccount/detailAccountStudent/DetailAccountStudent'
import  DetailAccountDT  from '../screen/admin/manageAccount/detailAccountDT/DetailAccountDT'

import  ListStudentRegister  from '../screen/admin/listApproveSvAdmin/listStudentRegister/ListStudentRegister'
import  DetailStudentRegister  from '../screen/admin/listApproveSvAdmin/listStudentRegister/DetailStudentRegister'


const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="forgotPassword2" component={ForgotPassword2} />
    </Stack.Navigator>
  )
}


const SinhVien = () => {
  return(
    // Sinh viên
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapSv" component={UITapSinhVien} />
      <Stack.Screen name="detailActive" component={DetailActive} />
      <Stack.Screen name="detailActived" component={DetailActived} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
    </Stack.Navigator>
  )

};

const TruongCLB = () => {
  return(
    // Trưởng câu lạc bộ, bí thứ
    <Stack.Navigator initialRouteName='uiTapTruongCLB' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapTruongCLB" component={UITapTruongCLB} />
      <Stack.Screen name="screenListActivedTruongCLB" component={ScreenListActivedTruongCLB} />
      <Stack.Screen name="form2CreateActiveTruongCLB" component={Form2CreateActiveTruongCLB} />

      <Stack.Screen name="listActiveTruongCLB" component={ListActiveTruongCLB} />
      <Stack.Screen name="detailActiveTruongCLB" component={DetailActiveTruongCLB} />

      <Stack.Screen name="listActiveCreatedTruongCLB" component={ListActiveCreatedTruongCLB} />
      <Stack.Screen name="detailActiveCreated" component={DetailActiveCreated} />

      <Stack.Screen name="listApproveSvTruongCLB" component={ListApproveSvTruongCLB} />
      <Stack.Screen name="detailApproveSvTruongCLB" component={DetailApproveSvTruongCLB} />

      <Stack.Screen name="listThongKeHoatDong" component={ListThongKeHoatDong} />
      <Stack.Screen name="detailThongKeHoatDong" component={DetailThongKeHoatDong} />

      <Stack.Screen name="from1EditActiveTruongCLB" component={From1EditActiveTruongCLB} />
      <Stack.Screen name="from2EditActiveTruongCLB" component={From2EditActiveTruongCLB} />

      <Stack.Screen name="detailActivedTruongCLB" component={DetailActivedTruongCLB} />
      <Stack.Screen name="listStudentRegisterTruongCLB" component={ListStudentRegisterTruongCLB} />
      <Stack.Screen name="detailStudentRegisterTruongCLB" component={DetailStudentRegisterTruongCLB} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
    </Stack.Navigator>
  )

};

const DoanTruong = () => {
  return (
     // Đoàn trường
    <Stack.Navigator initialRouteName='uiTapDTruong' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapDTruong" component={UITapDoanTruong} />
      <Stack.Screen name="form2CreateActiveDT" component={Form2CreateActiveDT} />

      <Stack.Screen name="screenListDoanTruong" component={ScreenListDoanTruong} />
      <Stack.Screen name="detailActiveDoanTruong" component={DetailActiveDoanTruong}/>

      <Stack.Screen name="listActiveCreatedDT" component={ListActiveCreatedDT} />
      <Stack.Screen name="detailActiveCreatedDT" component={DetailActiveCreatedDT} />
     
      <Stack.Screen name="listActiveApproveDT" component={ListActiveApproveDT} />
      <Stack.Screen name="detailActiveApprove" component={DetailActiveApprove} />

      <Stack.Screen name="listOrganizedActiveDT" component={ListOrganizedActiveDT} />
      <Stack.Screen name="detailOrganizedActive" component={DetailOrganizedActive} />

      <Stack.Screen name="from1EditActiveDoanTruong" component={From1EditActiveDoanTruong} />
      <Stack.Screen name="from2EditActiveDoanTruong" component={From2EditActiveDoanTruong} />

      <Stack.Screen name="listApproveSvDT" component={ListApproveSvDT} />
      <Stack.Screen name="listStudentRegisterDT" component={ListStudentRegisterDT} />
      <Stack.Screen name="detailStudentRegisterDT" component={DetailStudentRegisterDT} />

      <Stack.Screen name="changePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

const Admin = () => {
  
  return(
    <Stack.Navigator initialRouteName='uiTapAdmin' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="uiTapAdmin" component={UITapAdmin} />
      <Stack.Screen name="form2CreateActiveAdmin" component={Form2CreateActiveAdmin} />

      <Stack.Screen name="listActiveAdmin" component={ListActiveAdmin} />
      <Stack.Screen name="detailActiveAdmin" component={DetailActiveAdmin} />

      <Stack.Screen name="listActiveCreatedAdmin" component={ListActiveCreatedAdmin} />
      <Stack.Screen name="detailActiveCreatedAdmin" component={DetailActiveCreatedAdmin} />

      <Stack.Screen name="listActiveApproveAdmin" component={ListActiveApproveAdmin} />
      <Stack.Screen name="detailActiveApproveAdmin" component={DetailActiveApproveAdmin} />

      <Stack.Screen name="listOrganizedActiveAdmin" component={ListOrganizedActiveAdmin} />
      <Stack.Screen name="detailOrganizedActiveAdmin" component={DetailOrganizedActiveAdmin} />

      <Stack.Screen name="uiTapManageAccount" component={UITapManageAccount} />

      <Stack.Screen name="listApproveSvAdmin" component={ListApproveSvAdmin} />
      <Stack.Screen name="detailApproveSvAdmin" component={DetailApproveSvAdmin} />

      <Stack.Screen name="from1EditActiveAdmin" component={From1EditActiveAdmin} />
      <Stack.Screen name="from2EditActiveAdmin" component={From2EditActiveAdmin} />

     
      <Stack.Screen name="form1CreateStudent" component={Form1CreateStudent} />
      <Stack.Screen name="form2CreateStudent" component={Form2CreateStudent} />
      <Stack.Screen name="form3CreateStudent" component={Form3CreateStudent} />

      <Stack.Screen name="formEditAcountStudent" component={FormEditAcountStudent} />
      <Stack.Screen name="form2EditStudent" component={Form2EditStudent} />
      <Stack.Screen name="form3EditStudent" component={Form3EditStudent} />

      <Stack.Screen name="form1CreateDoanTruong" component={Form1CreateDoanTruong} />
      <Stack.Screen name="form2CreateDoanTruong" component={Form2CreateDoanTruong} />
      <Stack.Screen name="form3CreateDoanTruong" component={Form3CreateDoanTruong} />

      <Stack.Screen name="formEditAcountDT" component={FormEditAcountDT} />
      <Stack.Screen name="form2EditDoanTruong" component={Form2EditDoanTruong} />
      <Stack.Screen name="form3EditDoanTruong" component={Form3EditDoanTruong} />

      <Stack.Screen name="detailAccountStudent" component={DetailAccountStudent} />
      <Stack.Screen name="detailAccountDT" component={DetailAccountDT} />

      <Stack.Screen name="listStudentRegister" component={ListStudentRegister} />
      <Stack.Screen name="detailStudentRegister" component={DetailStudentRegister} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
    </Stack.Navigator>
  )
 
}

export default RootElement = () => {

  // // nếu user chưa đăng xuất thì khi thoát app và vào lại 
  // // thì token và role sẽ được load lên từ local storage
  // // chính vì vậy không cần phải đăng nhập lại
  const dispatch = useDispatch()
  useEffect(() => {
    const loadStorageData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const role = await AsyncStorage.getItem('role');
  
            // nếu mà token và role khác null thì mik sẽ dùng dispatch
            // bắn object này đi 
            if (token && role) {
                dispatch({ type: LOGIN_SUCCESS, payload: { token, role } });
            }
        } catch (error) {
            console.log('Không thể lấy token và role từ local storage');
        }
    };
  
    loadStorageData();
  }, [dispatch]);

    // lấy token và role trong stole
    const { token, role } = useSelector((state) => state.authReducer);
    
    useEffect(() => {
       SetAuthToken();
    }, [token]);

    console.log(role, 'màn navigation')

    const phanQuyen = () => {
      if(role == null){
        return <AuthStack/>
      } else{
        if(role == 1) return <Admin/>
        else if(role == 2) return <SinhVien/>
        else if(role == 3) return <TruongCLB/>
        else if(role == 4) return <DoanTruong/>
      }
    }
    return (
      <NavigationContainer>
        {
           phanQuyen()
        }
      </NavigationContainer>
    );
}
