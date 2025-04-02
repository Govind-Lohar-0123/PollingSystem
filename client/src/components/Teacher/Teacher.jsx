import { styled } from "@mui/material"
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStuHistory, getAllStudentAllQues } from "../Redux/actions/studentAction";
import { Link } from "react-router-dom";
import Chatbox from "../chatbox/Chatbox";
const Component = styled("div")(({ theme }) => ({
    backgroundColor: "yellow",
    display: "flex",

    height: "100vh",
    justifyContent: "center"

}))


export default function Teacher() {
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        dispatch(getAllStudentAllQues());

    }, [])


    const allStuAllQues = useSelector((state) => state.getStudentAllQues).ques;

    return (
        <>
            <Component style={{position:"relative"}}>
               
                <div className="w-50 mt-5">
                    <h3 className="text-center mb-5">
                        Poll History of Students
                    </h3>
                    {
                        (allStuAllQues != null && allStuAllQues.length != 0) ?

                            <table className="table table-hover text-center">

                                <thead>
                                    <tr>
                                        <th scope="col">Student ID</th>
                                        <th scope="col">Student Name</th>
                                        <th scope="col">Student Poll History</th>
                                        <th scope="col">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allStuAllQues.map((stu, idx) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th scope="row">{idx + 1}</th>
                                                        <td>{stu.stu_name}</td>
                                                        <td ><Link to={`/view-prev-poll-history/${stu._id}`}>History</Link></td>
                                                        <td><button onClick={() => (deleteStuHistory(stu._id), setFlag(!flag))} className="btn btn-danger ">Delete</button></td>

                                                    </tr>
                                                </>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>
                            : <h3 className="text-center text-bold ">No Student History is Present Please Take Quize <a href="/student"className="btn btn-primary text-white">Take Quize</a></h3>
                    }
                </div>
                <Chatbox />
            </Component>

        </>
    )
}