import axios from "axios";
export const getAllQuesAction = () => async (disptach) => {

    try {
        let res = await axios({
            method: "get",
            url: `http://localhost:8000/getallques`,
        })
                disptach({ type: "getAllQuesAction", payload: res.data.ques });
    }
    catch (err) {
                disptach({ type: "getAllQuesAction", payload: [] });
    }
}

