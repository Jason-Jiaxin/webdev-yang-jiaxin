module.exports = function (app) {

  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;

  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var websites = [];

  }

  function findWebsiteById(req, res) {

  }

  function updateWebsite(req, res) {

  }

  function deleteWebsite(req, res) {

  }
};
