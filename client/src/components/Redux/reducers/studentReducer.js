

export default function studentReducer(state = [], actions) {
    switch (actions.type) {
        case "getStudentAllQues":
            return actions.payload;
        case "getAllStudentAllQues":
            return actions.payload;
        default: return [];
    }
}