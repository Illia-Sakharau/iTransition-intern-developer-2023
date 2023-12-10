const User = require('../models/User')

class usersController {  
  async changeStatus (req, res) {
    try {
      const { emails, isActive } = req.body;
      const regEx = new RegExp(`^(${emails.join('|')})$`);

      await User.updateMany({ email: regEx }, { isActive: isActive });
      
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Block error'})
    }
  }

  async deleteUsers (req, res) {
    try {
      const { emails } = req.body;
      const regEx = new RegExp(`^(${emails.join('|')})$`);

      await User.deleteMany({ email: regEx });
      
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Block error'})
    }
  }
  
  async getUsers (req, res) {
    try {
      const users = await User.find();
      res.json(users)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Users error'})
    }
  }
}

module.exports = new usersController();
