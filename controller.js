const createUsersList = require('./utils/createUsersList');

class usersController {
  async getPersons (req, res) {
    try {
      const {seed, ln, page, size} = req.query;
      const users = createUsersList(seed, ln, page, size);

      res.json(users)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Person error'})
    }
  }
}

module.exports = new usersController();
