const UserModel = require('../models/users')
const jwt = require('jsonwebtoken')
const path = require('path');
let root=path.join(__dirname,"../")



 const getSignup=async(req,res)=>{
  res.sendFile(`${root}public/signup.html`)

}

const getLogin=async(req,res)=>{
  res.sendFile(`${root}public/login.html`)

}

// const getSignup= async (req,res)=>{
//     // console.log("get call executed")
//     //  console.log(__dirname,"directory name")
//     // console.log(__filename,"filename")
//       res.sendFile(`${__dirname}/signup.html`)
//       //console.log(__dirname,"directory name") 
// }
// const getLogin=async (req,res) => {
//     // console.log("get call executed")
//     //  console.log(__dirname,"directory name")
//     //  console.log(__filename,"filename")
//       res.sendFile(`${__dirname}/login.html`)
// }

const signUpController = async (req, res) => {
  const { firstName,lastName, email, password } = req.body
console.log(req.body)
  try {
    const newUser = await UserModel.create({ firstName,lastName, email, password  })
    res.send({ status: 'success', user: newUser })
  } catch (err) {
//    console.log(err)
    res.status(500).send(err)
  }
}

const loginController = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email})

    if (!user) {
      console.log(err)
      res.status(401).send({ status: 'error', msg: 'User Not Found' })
    }
    //user is verfied

    const userPayload = { email,password}

    //token creation payload, secret key, optional - algo, expirationTime
  const token = jwt.sign(userPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
  //console.log(token)
  res.cookie('jwt', token, { maxAge: 900000 })
  res.send({ status: 'success' })

  } catch (err) {
    console.log(err)
  res.status(401).send({ status: 'error', msg: err })
  }
}

const logoutController = (req, res) => {
  res.cookie('jwt', '', { maxAge: 3000 })
  res.send({ status: 'success', msg: 'Logged out successfully' })
}

module.exports = {
    getSignup,
    getLogin,
    loginController,
    logoutController,
    signUpController
}