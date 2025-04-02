import { combineReducers } from "@reduxjs/toolkit";
import quesReducer from "./reducers/quesReducer";
import studentReducer from "./reducers/studentReducer";


const rootReducers = combineReducers({
   getAllQues:quesReducer,
   getStudentAllQues:studentReducer,

})


export default rootReducers;