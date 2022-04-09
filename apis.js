const getUser = (req, res) =>{
   res.send(`User name: ${req.query.username}  Password: ${req.query.password}`)
}

const createUser = (req, res) =>{
    res.send(req.body);
}
module.exports = { getUser, createUser };