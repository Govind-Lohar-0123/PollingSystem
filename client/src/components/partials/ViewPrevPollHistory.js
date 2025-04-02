

import { useDispatch, useSelector } from "react-redux";

import { getStudentItemToStorage, removeStudentItemToStorage } from "./studentStorage";
import ViewPollQuesCom from "./ViewPollQuesComp";
import { addStudentQues, getStudentAllQues } from "../Redux/actions/studentAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";







export default function ViewPrevPollHistory() {
    let point = 0;
    const { stu_id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentAllQues(stu_id));

    }, [])


    const quesArray = useSelector((state) => state.getStudentAllQues).ques;

    return (
        <>

            <div className="my-2 text-center p-2">
                <h3>The Poll Prev Poll History of Student {getStudentItemToStorage("stu_name")}</h3>
            </div>
            {(quesArray != null && quesArray.length != 0) &&



                (

                    quesArray.map((ques, idx1) => {
                        point = 0;

                        return <>
                            <h4 className="text-bold text-center p-4 mt-3">Poll Number {idx1 + 1}</h4> 
                            {
                                ques.ques.map((ques, idx) => {
                                    if (ques.ans == ques.myans) point++;
                                    return <>
                                        <ViewPollQuesCom ques={ques} idx={idx} key={idx} />
                                        <hr className="w-100" />
                                    </>
                                })


                            }
                            <h3 className="my-5 text-center text-bold ">
                                Total Point :- {point} Out of {ques.ques.length}
                            </h3>

                        </>






                    })
                )





            }




        </>
    )
}