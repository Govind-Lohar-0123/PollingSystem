import quesModel from "../utils/models/questionsSchema.js";


class QuestionsController {

    static async addQuestions(ques) {
        try {
            await quesModel.insertMany(ques);

        }
        catch (err) {
          
        }
    }
    static async removeAllQuestions(ques) {
        try {
            await quesModel.deleteMany();
           
        }
        catch (err) {
            
        }
    }
    static async getAllQuestions(req, res) {
        try {
            const ques = await quesModel.find();
            res.status(200).send({ ques: ques });

        }
        catch (err) {
            
            res.send({ ques: [] });
        }
    }
    static async getOneQuestions(req, res) {
        const { qNum } = req.params;
        try {
            const ques = await quesModel.findOne({ qNum});
            res.status(200).send({ ques: ques });

        }
        catch (err) {
            
            res.send({ ques: {} });
        }
    }



}

export default QuestionsController;
