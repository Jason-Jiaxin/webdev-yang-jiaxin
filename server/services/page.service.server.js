module.exports = function (app) {

  let pageModel = require('../model/page/page.model.server');
  let pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function createPage(req, res) {
    let wid = req.params['websiteId'];
    let page = req.body;
    page._website = wid;
    pageModel.createPage(page).then(function (result) {
      res.json(result);
    });
  }

  function findAllPagesForWebsite(req, res) {
    let wid = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(wid).then(function (result) {
      res.json(result);
    });
  }

  function findPageById(req, res) {
    let pid = req.params['pageId'];
    pageModel.findPageById(pid).then(function (result) {
      res.json(result);
    });
  }

  function updatePage(req, res) {
    let pid = req.params['pageId'];
    let page = req.body;
    pageModel.updatePage(pid, page).then(function (result) {
      res.json(result);
    });
  }

  function deletePage(req, res) {
    let pid = req.params['pageId'];
    let page = req.body;
    pageModel.deletePage(pid).then(function (result) {
      res.json(result);
    })
  }

};
