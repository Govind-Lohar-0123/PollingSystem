
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuesAction } from "../Redux/actions/quesAction";
import { getStudentItemToStorage, removeStudentItemToStorage } from "./studentStorage";
import ViewPollQuesCom from "./ViewPollQuesComp";
import { addStudentQues } from "../Redux/actions/studentAction";
import { useNavigate } from "react-router-dom";







export default function ViewPollHistory() {
    let point = 0;
    const dispatch = useDispatch();
    const quesArray = getStudentItemToStorage("stuQuesAns");
    const navigate=useNavigate();

    
    function saveTheHistory() {
       addStudentQues(quesArray,getStudentItemToStorage("stu_name"));
       removeStudentItemToStorage("stuQuesAns");
       navigate("/");
       
    }

    return (
        <>

            <div className="my-2 text-center p-2">
                <h3>The Poll History of Student {getStudentItemToStorage("stu_name")}</h3>
            </div>
            {(quesArray != null && quesArray.length != 0) &&



                (

                    quesArray.map((ques, idx) => {
                        if (ques.ans == ques.myans) point++;
                        return <>
                            <ViewPollQuesCom ques={ques} idx={idx} key={idx}/>
                            <hr className="w-100" />
                        </>


                    })
                )





            }

            <h3 className="my-5 text-center text-bold ">
                Total Point :- {point} Out of {quesArray.length}
            </h3>
            <button onClick={saveTheHistory} className="btn btn-primary text-center p-2 d-block mx-auto my-5 text-bold">Save The History</button>

        </>
    )
}