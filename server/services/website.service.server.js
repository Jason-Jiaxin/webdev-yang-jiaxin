module.exports = function (app) {

  let websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  function createWebsite(req, res) {
    let userId = req.params['userId'];
    let website = req.body;
    website._id = getRandomInt(1000, 10000).toString();
    website.developerId = userId;
    websites.push(website);
    res.json(website);
  }

  function findAllWebsitesForUser(req, res) {
    let userId = req.params['userId'];
    let result = websites.filter(function (website) {
      return website.developerId === userId;
    });
    res.json(result);
  }

  function findWebsiteById(req, res) {
    let wid = req.params['websiteId'];
    let website = websites.find(function (website) {
      return website._id === wid;
    });
    res.json(website);
  }

  function updateWebsite(req, res) {
    let wid = req.params['websiteId'];
    let website = req.body;
    let index = websites.findIndex(function (website) {
      return website._id === wid;
    });
    websites[index] = website;
    res.json(website);
  }

  function deleteWebsite(req, res) {
    let wid = req.params['websiteId'];
    let website = req.body;
    let index = websites.findIndex(function (website) {
      return website._id === wid;
    });
    websites.splice(index, 1);
    res.json({});
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
