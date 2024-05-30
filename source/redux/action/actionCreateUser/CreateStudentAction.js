import axios from "axios";
import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
} from "../../types/typesCreateUser/TypesCreateStudent";
import UrlApi from "../../UrlApi";
import SetAuthToken from '../../../component/SetAuthToken'

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export default CreateStudentAction = (accountStudent) => {
  const uerCreateStudent = "users/create_student";
  return async (dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });
    try {

        // username: username,
        // password: password,
        // role_id: role_id,
        // status_id: status_id,
        // MSSV: MSSV,
        // first_name: first_name,
        // last_name: last_name,
        // phone: phone,
        // address: address,
        // class_id: class_id,
        // email: email,
        // gender_id: gender_id,
        // birth_date: birth_date,
     
     await SetAuthToken()
      console.log(accountStudent, "màn createStudentAction");
      const res = await axios.post(`${UrlApi}${uerCreateStudent}`, accountStudent);

      dispatch({
        type: CREATE_STUDENT_SUCCESS,
      });
    } catch (error) {
      // Sử dụng console.error thay vì console.log trong
      // phần catch: Điều này giúp
      // phân biệt lỗi trong log dễ dàng hơn
      console.error("Tạo tài khoản thất bại", error);

      if (error.response) {
        // Request made and server responded
        dispatch({
          type: CREATE_STUDENT_FAILURE,
          payload: error.message
        }
         

          );
      } else if (error.request) {
        // The request was made but no response was received
        dispatch({
          type: CREATE_STUDENT_FAILURE,
          payload: "No response received from the server."}
        )
      }
       else {
        // Something happened in setting up the request that triggered an Error
        dispatch({
          type: CREATE_STUDENT_FAILURE,
          payload: error.message
        });
      }
      // dispatch({
      //   type: CREATE_STUDENT_FAILURE,
      //   payload: 'Tạo tài khoản thất bại',
      // });
    }
  };
};

