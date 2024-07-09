import { User } from '../models/models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function register(req, res) {
  const emailExist = await User.findOne({
    where: { email: req.body.email }
  })
  if (emailExist !== null) {
    console.log('The email is already used')
    res.status(401).json({
      message: 'The email is already used'
    })
    return
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10)
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
    return
  } catch (error) {
    res.status(401).json(error)
    return
  }
}

export async function login(req, res) {
  const { email, password } = req.body

  const user = await User.findOne({
    where: { email }
  })

  if (!user) {
    res.status(401).json({
      message: 'Invalid user or password'
    })
    return
  }

  if (!bcrypt.compareSync(password, user.password)) {
    res.status(401).json({
      message: 'Invalid user or password'
    })
    return
  }

  const token = jwt.sign({ id: user.id }, 'clavesecreta')

  res.status(200).json({
    token,
    user: user.name
  })
  return
}