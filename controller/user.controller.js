const user = (req, res) =>{
    res.send(req.query.username)
}
const userCreate = (req, res) =>{
    res.send('user created');
}

module.exports = { user, userCreate };