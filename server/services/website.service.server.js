module.exports = function (app) {

  let websiteModel = require('../model/website/website.model.server');
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
    website._user = userId;
    websiteModel.createWebsiteForUser(website).then(function (result) {
      res.json(result);
    });
  }

  function findAllWebsitesForUser(req, res) {
    let userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId).then(function (result) {
      res.json(result);
    });
  }

  function findWebsiteById(req, res) {
    let wid = req.params['websiteId'];
    websiteModel.findWebsiteById(wid).then(function (result) {
      res.json(result);
    })
  }

  function updateWebsite(req, res) {
    let wid = req.params['websiteId'];
    let website = req.body;
    websiteModel.updateWebsite(wid, website).then(function (result) {
      res.json(result);
    });
  }

  function deleteWebsite(req, res) {
    let wid = req.params['websiteId'];
    websiteModel.deleteWebsite(wid).then(function (result) {
      res.json({});
    });
  }
};
