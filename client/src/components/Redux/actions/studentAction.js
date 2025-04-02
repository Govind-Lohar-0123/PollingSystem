import axios from "axios";
import serverUrl from "../../partials/data";

export const addStudentQues = async (ques, stu_name) => {
    let data = { ques, stu_name: stu_name };
    try {
        let res = await axios({
            method: "post",
            url:`${serverUrl}/addstudentallques`,
            data: { ques: data }
        })

    }
    catch (err) {
       

    }
}
export const getStudentAllQues = (stu_id) => async (disptach) => {

    try {
        let res = await axios({
            method: "post",
            url: `${serverUrl}/getstudentallques`,
            data: { stu_id }
        })

        disptach({ type: "getStudentAllQues", payload: res.data });
    }
    catch (err) {

        disptach({ type: "getStudentAllQues", payload: [] });
    }
}
export const deleteStuHistory =async (stu_id) => {
 
    try {
        let res = await axios({
            method: "delete",
            url: `${serverUrl}/deletestuhistory/` + stu_id,

        })


    }
    catch (err) {


    }
}
export const getAllStudentAllQues = () => async (disptach) => {

    try {
        let res = await axios({
            method: "get",
            url: `${serverUrl}/getallstudentallques`,

        })

        disptach({ type: "getAllStudentAllQues", payload: res.data });
    }
    catch (err) {

        disptach({ type: "getAllStudentAllQues", payload: [] });
    }
}


