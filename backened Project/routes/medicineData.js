const express = require('express')
const { getMedicines, getMedicinesByID, postMedicine, updateMedicineById, deleteMedicineByID } = require('../controllers/medicineData');
const { authMiddleware } = require('../middlewares/auth');
const authRouter = require('./auth');
const medicineRouter = express.Router()


medicineRouter.use(authMiddleware)

medicineRouter.get('/', getMedicines)
medicineRouter.get('/:medicineID', getMedicinesByID);
medicineRouter.post('/', postMedicine);
medicineRouter.put('/:medicineID', updateMedicineById);
medicineRouter.delete('/:medicineID', deleteMedicineByID);


module.exports = medicineRouter