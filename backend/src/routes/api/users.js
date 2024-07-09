import { Router } from "express";
import { register, login } from "../../controllers/users.controller.js";

export const router = Router()

router.post('/register', register)
router.post('/login', login)