import { User } from '../models/models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function register(req, res) {
  req.body.password = bcrypt.hashSync(req.body.password, 10)
  try {
    const user = await User.create(req.body)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(401).json(error)
  }
}

export async function login(req, res) {
  const { email, password } = req.body

  const user = await User.findOne({
    where: { email }
  })

  if (!user) {
    return res.status(401).json({
      message: 'Invalid user or password'
    })
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({
      message: 'Invalid user or password'
    })
  }

  const token = jwt.sign({ id: user.id }, 'clavesecreta')

  return res.status(200).json({
    token,
    user: user.name
  })
}