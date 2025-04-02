import axios from "axios";
import serverUrl from "../../partials/data";
export const getAllQuesAction = () => async (disptach) => {

    try {
        let res = await axios({
            method: "get",
            url: `${serverUrl}/getallques`,
        })
        disptach({ type: "getAllQuesAction", payload: res.data.ques });
    }
    catch (err) {
        disptach({ type: "getAllQuesAction", payload: [] });
    }
}

