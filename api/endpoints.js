const express = require("express")
const router = express.Router()
const { validateUser } = require("./middleware");

const users = [
    { username: "username", password: "password"}
]

router.get("/users", (req, res) => {
    res.status(200).json(users)
})

router.post("/register", validateUser, (req, res) => {
    users.push(req.user)
    res.status(201).json(req.user)
})

router.post("/login", validateUser, (req, res, next) => {
    const { user } = req
    const registeredUser = users.find(u => 
        u.password === user.password && u.username === user.username
    )
    registeredUser ?
        res.status(200).json(registeredUser)
        :
        next({ status: 404, message: "user is not in database" })
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router