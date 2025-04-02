import { styled, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteStuHistory, getAllStudentAllQues } from "../Redux/actions/studentAction"
const TopSection = styled("div")(({ theme }) => ({
    display: "flex",

    justifyContent: "space-around",


    "a": {
        fontWeight: "bold",
        fontSize: "1rem",
        color: "black",
    }
}))

const Component = styled("div")(({ theme }) => ({
    width: "300px",
    height: "400px",
    padding: "10px",
    backgroundColor: "white",
    boxShadow: "0 0 10px 1px white",
    position: "absolute",
    bottom: 80,
    right: 30,
    borderRadius: "10px",

}))
const DisplaySection = styled("div")(({ theme }) => ({

    minHeight: "280px"
}))
const SearchSection = styled("div")(({ theme }) => ({


}))

export default function Chatbox({ stu_name }) {
    const [change, setChange] = useState(true);
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudentAllQues());

    }, [])
    const allStuAllName = useSelector((state) => state.getStudentAllQues).ques;
    return (
        <>
            <Component>
                <TopSection>
                    <a href="#" onClick={() => setChange(true)}>Chat</a>
                    <a href="#" onClick={() => setChange(false)}>Participants</a>
                </TopSection>
                <hr />
                {change ?
                    <div>

                        <DisplaySection>
                            <div>
                                <div className="alert alert-primary p-1 px-2" style={{ display: "inline-block" }} role="alert">Hello Govind Lohar.</div>
                            </div>
                            <div>
                                <div className="alert alert-primary p-1 px-2 " style={{ display: "inline-block" }} role="alert">How are you .</div>
                            </div>
                            <div>
                                <div className="alert alert-primary p-1 px-2" style={{ display: "inline-block" }} role="alert">i am find and you.</div>
                            </div>
                        </DisplaySection>
                        <SearchSection className="mt-auto">
                            <div className=" bg-light d-flex align-items-center gap-2 ">

                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>

                            </div>
                        </SearchSection>
                    </div>
                    :
                    <div className="stude-part">
                        {(allStuAllName != null && allStuAllName != undefined && allStuAllName.length != 0) ?
                            <table className="table table-hover " >

                                <thead>
                                    <tr>

                                        <th >Name</th>
                                        <th >Actions</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {allStuAllName.map((stu, idx) => {
                                        return (
                                            <>
                                                <tr key={idx}>
                                                    <td>{stu.stu_name}</td>
                                                    <td><a className="text-primary" onClick={() => (deleteStuHistory(stu._id), setFlag(!flag))} >kickOut</a></td>

                                                </tr>
                                            </>
                                        )
                                    })}





                                </tbody>
                            </table>
                            : <h5 className="text-center text-bold ">No Student Is Here...</h5>}
                    </div>
                }
            </Component>

        </>
    )
}