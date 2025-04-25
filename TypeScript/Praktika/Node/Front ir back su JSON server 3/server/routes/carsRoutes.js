import express from 'express';
import {addNewCar, getAllCars, getSpecificCar} from "../controllers/carsController.js";

const router = express.Router();

router.get('', getAllCars);
router.get('/:id', getSpecificCar);
router.post('', addNewCar);
// router.delete('/:id');
// router.patch('/:id');
// router.put('/:id');
