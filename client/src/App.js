
import Home from "./components/partials/Home";
import Student from "./components/Student/Student";
import QuizeComponent from "./components/partials/QuizeComponent";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { getStudentItemToStorage, getStudentName } from "./components/partials/studentStorage";
import ViewPollHistory from "./components/partials/ViewPollHistory";
import ViewPrevPollHistory from "./components/partials/ViewPrevPollHistory";
import Teacher from "./components/Teacher/Teacher";
function App() {
 
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/student" element={(getStudentItemToStorage("stu_name")==null ?<Student/> :<Navigate to="/quize"/>)}/>
          <Route path="/quize" element={(getStudentItemToStorage("stu_name")!=null ?<QuizeComponent/> :<Navigate to="/student"/>)}/>
          <Route path="/view-poll-history" element={<ViewPollHistory/>}/>
          <Route path="/view-prev-poll-history/:stu_id" element={<ViewPrevPollHistory/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
          
        </Routes>
    </BrowserRouter>
  );
}
export default App;
