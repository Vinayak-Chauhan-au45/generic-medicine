const medicineModel = require('../models/medicineData')

const getMedicines = async (req, res) => {
//req.userData
// User.findById(req.user, function (err, user) {
//   if (user.isAdmin == true) {
//       res.send(user);
//   } else {
//       return res.status(400).send({ message: 'User is not Admin' });
//   }
// })
  try {
    const medicines = await medicineModel.find();
    res.send({status:'success',medicines})
  } catch (err) {
    // console.log(err)
    res.status(500).send({ status: 'error', msg: 'error fetching medicines' })
  }
}


const getMedicinesByID = async (req, res) => {
  const { medicineID } = req.params

  const medicine =await medicineModel.findByID(medicineID)
  if (medicine) {
    res.send(medicine)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postMedicine = async (req, res) => {
  const medicineData = req.body
   try {
    const result = await medicineModel.create(medicineData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateMedicineById = async (req, res) => {

  const { medicineID } = req.params
  const updatedMedicineData = req.body //{language, name, id}

  try {
    const updatedResult = await medicineModel.findByIdAndUpdate(medicineID, updatedMedicineData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteMedicineByID = async (req, res) => {
  const { medicineID } = req.params
  const userData=req.userData

  const deletedData = await medicineModel.findByIdAndDelete(medicineID)
  res.send(deletedData)
}


module.exports = {
  getMedicines,
  getMedicinesByID,
  postMedicine,
  updateMedicineById,
  deleteMedicineByID
}