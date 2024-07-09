import jwt from 'jsonwebtoken'
import { User } from '../models/models.js'

export async function checkToken(req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return res.status(403).json({
      message: 'Cannot be accessed'
    })
  }

  let payload
  try {
    payload = jwt.verify(token, 'clavesecreta')
  } catch (error) {
    return res.status(403).json({
      message: 'Cannot be accessed'
    })
  }

  const user = await User.findByPk(payload.id)
  req.user = user

  return next()
}