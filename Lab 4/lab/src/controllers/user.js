const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)

    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }

    // Save to DB
    db.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res)
    })
  },

  get: (username, callback) => {
    if (!username) {
      return callback(new Error("Username is required"), null)
    }

    db.hgetall(username, (err, obj) => {
      if (err) return callback(err, null)
      if (!obj) {
        return callback(null, null) // User does not exist
      }

      const user = {
        username: username,
        firstname: obj.firstname,
        lastname: obj.lastname
      }

      callback(null, user)
    })
  }
}