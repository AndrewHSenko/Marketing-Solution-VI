import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import UnauthenticatedError from '../errors/unauthenticated.js'
import BadRequestError from '../errors/bad_request.js'

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user : {name: user.name}, token})
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({email})
    if (!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user : {name:user.name}, token})
}

const exports = { register, login}
export default exports