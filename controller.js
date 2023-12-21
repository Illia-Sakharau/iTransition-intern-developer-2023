const createUsersList = require('./utils/createUsersList');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

class usersController {
  async getPersons (req, res) {
    try {
      const {seed='123', ln='en', page='1', size='1', errNum='0'} = req.query;
      const users = createUsersList({seed, ln, page, size, errNum});

      res.json(users)
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Person error'})
    }
  }
  async downloadCSV (req, res) {
    try {
      const {seed='123', ln='en', page='1', size='1', errNum='0'} = req.query;
      const users = createUsersList({seed, ln, page, size, errNum});
      const csvWriter = createCsvWriter({
        path: 'file.csv',
        header: [
          {id: 'index', title: '##'},
          {id: 'uuid', title: 'Identification #'},
          {id: 'name', title: 'Full Name'},
          {id: 'address', title: 'Address'},
          {id: 'phone', title: 'Phone number'}
        ]
      });
      csvWriter.writeRecords(users)
        .then(() => {
          res.download('file.csv')
        })
        .catch(() => {
          console.log(error);
          res.status(400).json({message: 'Create CSV error'})
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({message: 'Download error'})
    }
  }
}

module.exports = new usersController();
