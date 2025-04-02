import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getAllQuesAction } from "../Redux/actions/quesAction.js";
import { addStudentItemToStorage, getStudentItemToStorage } from "./studentStorage.js";



const Component = styled("div")(({ theme }) => ({
    margin: "auto",
    padding: "20px",
    width: "60%",
    minHeight: "60%",
    backgroundColor: "red",
    borderRadius: "10px",

}))

const OptionComponent = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    "div": {
        display: "flex",
        gap: "10px"
    },
    "label": { fontWeight: "bold", textTransform: "capitalize" }
}))

const Display = styled("div")(({ theme }) => ({

}))
let id;
let ans = -1;

let quesArray = [];



export default function QuesComponent() {

    const [timer, setTimer] = useState(0);

    const dispatch = useDispatch();
    const [qNumIdx, setQINumIdx] = useState(0);
    const navigate = useNavigate();
    let allQues = useSelector((state) => state.getAllQues);
    let ques = allQues[qNumIdx];

    useEffect(() => {
        dispatch(getAllQuesAction());

    }, []);

    useEffect(() => {
        startTimer();
    }, [qNumIdx]);

    const startTimer = () => {

        id = setInterval(() => {
            setTimer(prevTimer => {   // updator function

                if (prevTimer < 60) {
                    return prevTimer + 1;
                } else {


                    clearInterval(id);
                    showAnswer();
                    return prevTimer;

                }
            });
        }, 1000);


    }



    function showAnswer() {
        if (ques != null && ques != undefined) {


            let q = ques;
            q.myans = ans;
            quesArray.push(q);
            clearInterval(id);
            let d = document.getElementById("options").getElementsByTagName("div")[ques.ans];

            d.classList.add("showAns");
            if (allQues.length - 1 == qNumIdx) {

                addStudentItemToStorage("stuQuesAns", quesArray);
                window.location.href = "/view-poll-history";
                return;
            }
            setTimeout(() => {
                setQINumIdx(qNumIdx + 1); setTimer(0);
                d.classList.remove("showAns");
                ans = -1;
            }, 2000);
        }
    }

    return (
        <>
            {(ques != null && Object.keys(ques).length != 0) &&




                <Component>

                    <div className="bg-primary mb-2 w-25 text-center text-bold  text-white p-2">
                        &#128339; {timer} &nbsp; Second
                    </div>

                    <Display className="bg-white py-2 px-2" style={{ minHeight: "50px" }}>

                        <h6 style={{ lineHeight: "2", }}><span className="text-bold">Q.{qNumIdx + 1}</span> &nbsp;&nbsp;{ques.ques}</h6>

                    </Display>

                    <OptionComponent className="mt-5 " id="options">
                        {
                            ques.options.map((op, idx) => {
                                return (

                                    <div className="form-check" key={idx} onClick={() => ans = idx}>
                                        <input className="form-check-input" type="radio" name="option" id={idx} />
                                        <label className={`form-check-label`} htmlFor={idx} >
                                            {op}
                                        </label>
                                    </div>

                                )
                            })
                        }



                    </OptionComponent>

                    <button className="btn mx-auto d-block btn-primary mt-4" onClick={showAnswer}>SUBMIT</button>
                </Component>
            }

        </>
    )
}