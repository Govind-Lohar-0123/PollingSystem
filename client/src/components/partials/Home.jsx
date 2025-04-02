import { useEffect } from "react"
import { removeStudentItemToStorage } from "./studentStorage"


export default function Home() {

    useEffect(() => {
        removeStudentItemToStorage("stu_name");
    }, [])
    return (
        <>
            <main >

                <div>
                    <div >
                        <h2 >Welcome to the <span className="text-bold">Live Polling System</span></h2>
                        <p className="text-muted">Please Select the role that best describe you to use Live Polling System</p>
                    </div>
                    <div className="mt-5 role d-flex align-items-center">
                        <a href="/student" className="d-block">
                            <div className="bg-primary p-4" >
                                <h4>I' am a Student</h4>
                                <p >This the role for Student who wants to give quize.</p>
                            </div>
                        </a>
                        <a href="/teacher" className="d-block">
                            <div className="bg-danger p-4">
                                <h4>I' am a Teacher</h4>
                                <p>This the role for Teacher who wants to take quize.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}