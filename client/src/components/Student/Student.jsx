import { styled } from "@mui/material"
import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom";
import { addStudentItemToStorage, addStudentName, getStudentName } from "../partials/studentStorage";
const StudentComponent=styled("div")(({theme})=>({
  height:"100vh",
  
   marginInline:"auto",
   display:"flex",
   flexDirection:"column",
   alignItems:"center",
   justifyContent:"center"

}))

export default function Student() {
    const [name,setName]=useState("");
    const [result,setResult]=useState({type:false,msg:""});
    const navigator=useNavigate();
   
    
    const submitHandle=(e)=>{
        e.preventDefault();
        if(name==""){
            setResult({type:true,msg:"Please Write Student Name"});
            return ;
        }
       
        addStudentItemToStorage("stu_name",name);
        window.location.href="/quize"
    }

    return (
        <>
           
            <StudentComponent className=" bg-danger">
      
                {result.type ? <div className="alert alert-primary text-bold " role="alert">{result.msg}</div>:""}
                <div className="text-center text-white">
                    <h3 >Welcome to the Live Polling System at Student Role</h3>
                    <p>Please Mention you Name here to Start the Live Polling System</p>
                </div>
                <form onSubmit={submitHandle} className="mt-3 w-50">
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="text-white">Enter Student Name:-</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />

                    </div>

                    <button type="submit" onClick={submitHandle} className="btn mx-auto d-block btn-primary mt-4">Continue</button>
                </form>
            </StudentComponent>
        </>
    )
}