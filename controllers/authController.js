const User = require('../models/User')

class authController {
  async login (req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email})
      if (!user || !(user.password === password)) {
          return res.status(400).json({message: `Invalid email or password!`})
      }
      if (!user.isActive) {
        return res.status(400).json({message: `This user is blocked!`})
      }
      user.lastLogin = Date.now();
      await user.save()
      return res.json(user)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Login error'})
    }
  }

  async registration (req, res) {
    try {
      const {username, email, password, position} = req.body;
      const candidate = await User.findOne({email})
      if (candidate) {
        return res.status(400).json({message: 'User with this email exists.'})
      }
      const lastLogin = Date.now();
      const isActive = true;
      const user = new User({username, email, password, position, lastLogin, isActive});

      await user.save();
      return res.json(user)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Registration error'})
    }
  }
}

module.exports = new authController();
