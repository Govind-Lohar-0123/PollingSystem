import studentModel from "../utils/models/studentSchema.js";


class StudentController {

    static async addStudentAllQues(req, res) {
        let ques = req.body.ques;

        try {
            await studentModel.insertMany(ques);

        }
        catch (err) {
           
        }
    }

    static async getStudentAllQues(req, res) {

        let stu_id = req.body.stu_id;
        try {
            const ques = await studentModel.find({ _id: stu_id });
            res.status(200).send({ ques: ques });

        }
        catch (err) {
           
            res.send({ ques: [] });
        }
    }
    static async deleteStuHistory(req, res) {
       
        let stu_id = req.params.stu_id;
        try {
            const ques = await studentModel.deleteOne({ _id: stu_id });
            res.status(200).send("Deleted ");

        }
        catch (err) {

            res.send("Deleted");
        }
    }
    static async getAllStudentAllQues(req, res) {


        try {
            const ques = await studentModel.find();
            res.status(200).send({ ques: ques });

        }
        catch (err) {
            
            res.send({ ques: [] });
        }
    }




}

export default StudentController;
