import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Sample from '../models/sampleModel.js';

const sampleRouter = express.Router();

sampleRouter.get('/', expressAsyncHandler(async(req, res) => {
    const samples = await Sample.find({});
    res.send(samples);
  })
  );

  export default sampleRouter;