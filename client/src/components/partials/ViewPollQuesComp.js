
import { styled } from "@mui/material";
import { useEffect } from "react";

const Component = styled("div")(({ theme }) => ({
    margin: "auto",
    padding: "20px",
    width: "60%",
    minHeight: "60%",
    backgroundColor: "orange",
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

export default function ViewPollQuesCom({ ques, idx }) {


    return (
        <>

            <Component>



                <Display className="bg-white py-2 px-2" style={{ minHeight: "50px" }}>

                    <h6 style={{ lineHeight: "2", }}><span className="text-bold">Q.{idx + 1}</span> &nbsp;&nbsp;{ques.ques}</h6>

                </Display>

                <OptionComponent className="mt-5 " id="options">
                    {
                        ques.options.map((op, idx) => {
                            return (

                                <div className={`form-check ${(idx == ques.ans) ? "showAns" : ""}`} key={idx} >
                                    <input className="form-check-input" type="radio" name="option" id={idx} />
                                    <label className={`form-check-label`} htmlFor={idx} >
                                        {op}
                                    </label>
                                </div>

                            )
                        })
                    }



                </OptionComponent>

                <button className="btn mx-auto d-block w-50 btn-primary mt-4" >My Ans :- <span className="text-bold">{(ques.myans == -1) ? "No Response" : ques.options[ques.myans]}</span></button>
            </Component>

        </>
    )
}