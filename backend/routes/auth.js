import express from 'express'
import exports from '../controllers/auth.js'

const router = express.Router()
const register = exports.register
const login = exports.login

router.post('/register', register)
router.post('/login', login)

export default router