
export default function quesReducer(state = {}, actions) {
   
    switch (actions.type) {
        case "getAllQuesAction":
            return actions.payload;
        default: return [];
    }
}