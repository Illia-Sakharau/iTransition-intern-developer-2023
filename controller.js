class usersController {
  async getPersons (req, res) {
    try {
      const query = req.query;
      res.json(query)
    } catch (error) {
      res.status(400).json({message: 'Person error'})
    }
  }
}

module.exports = new usersController();
