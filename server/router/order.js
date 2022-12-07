const {Router} = require('express')
const config = require('config')
const secret = config.get('jwtSecret')
const codes = config.get('code')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')

const Ticket = require('../models/ticket')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const ver = await verify(authHeader)

        if (ver) {
            const tickets = await Ticket.find()
            res.json({tickets})
        } else {
            res.status(500).json({message: 'Something went wrong, try again'})
        }

    } catch (e) {

        res.status(500).json({message: 'Something went wrong, try again'})
    }
})

router.post('/did', async (req, res, next) => {
    try {
        const {_id, did} = req.body
        const authHeader = req.headers.authorization;

        const ver = await verify(authHeader)

        if (ver) {
            if (did === "did") {
                await Ticket.findByIdAndUpdate(_id, {did: true})
                res.status(201).json({message: "Did"})
            }
            if (did === "del") {
                await Ticket.findByIdAndDelete(_id)
                res.status(201).json({message: "Delete"})
            }
        } else {
            res.status(500).json({message: 'Something went wrong, try again'})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Something went wrong, try again'})
    }
})

router.post('/login', [
    check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
    check('password', 'enter password').exists()
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect login data'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'User is not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        console.log(user)
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid password, try again'})
        }
        const token = jwt.sign({userId: user._id}, secret, {expiresIn: '25h', algorithm: 'HS256'})

        res.json({token})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Something went wrong, try again'})
    }
})



router.post('/register', [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Minimum password length 6 characters')
        .isLength({min: 6})
], async (req, res) => {
    try {
        console.log(req.body)
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during registration'
            })
        }
        const {email, password, code } = req.body

        if(code!==codes){
            return res.status(400).json({message: 'No code'})
        }
        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({message: 'This user already exists'})
        }

        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new User({email, password: hashedPassword })

        await user.save()


        const token = jwt.sign({userId: user._id}, config.get('jwtSecret'), {expiresIn: '2h', algorithm: 'HS256'})

        res.json({token})

    } catch (e) {
        res.status(500).json({message: 'Something went wrong, try again'})
    }
})

const verify = async (autorization) => {
    if (autorization) {
        const token = await autorization.split(' ')[1];
        const parseToken = await jwt.verify(token, secret)
        if (parseToken.exp < Math.floor(Date.now() / 1000) + (60 * 60)) {
            return false
        }
        const user = await User.findById(parseToken.userId)

        if (user) {
            return true
        }

    } else {
        return false
    }
}

module.exports = router
