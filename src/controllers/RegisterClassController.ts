import Express, { RequestHandler, Request, Response } from 'express';
import { OK } from 'http-status-codes';

const RegisterClassController = Express.Router();

const registerClassHandler: RequestHandler = async (req: Request, res: Response) => {
    
    const { teacher_id, student_ids, subject_id, class_id } = req.body
    
    

    return res.json({
        status: OK
    });
}

RegisterClassController.post('/register', registerClassHandler);

export default RegisterClassController;
