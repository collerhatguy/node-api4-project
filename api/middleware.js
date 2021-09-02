
const validateUser = (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) next({ status: 404, message: "password and username are both necessary" })
    if (username.length < 3 || password.length < 3) next({ status: 404, message: "password and username are both necessary" })
    req.user = req.body
    next()
}

module.exports = { validateUser }