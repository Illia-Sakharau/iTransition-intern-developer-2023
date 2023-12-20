const createUser = require('./utils/createUser');

class usersController {
  async getPersons (req, res) {
    try {
      const {seed, ln} = req.query;
      const user = createUser(seed, 1, ln);

      res.json({user, seed})
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Person error'})
    }
  }
}

module.exports = new usersController();
