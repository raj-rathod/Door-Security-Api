const memberCreate = (req, res) => {
    res.send('member created');
}

const members = (req, res) => {
    res.send(req.query.username)
}

const memberPermissionUpdate = (req, res) => {
    res.send('permissions update')
}

const memberDelete = (req, res) => {
    res.send('member deleted')
}

module.exports = { 
    members, 
    memberCreate,
    memberPermissionUpdate,
    memberDelete
};