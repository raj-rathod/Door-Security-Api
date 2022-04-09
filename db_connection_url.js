const username = "Rajesh";
const password = "mXVs0kYbPhtBTshw";
const cluster = "cluster0.5gpsd";
const dbname = "DoorSecurityDB";
const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
module.exports = { url };