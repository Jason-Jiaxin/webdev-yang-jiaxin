module.exports = function (app) {

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
    page._id = getRandomInt(1000, 10000).toString();
    page.websiteId = wid;
    pages.push(page);
    res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    let wid = req.params['websiteId'];
    let result = pages.filter(function (page) {
      return page.websiteId === wid;
    });
    res.json(result);
  }

  function findPageById(req, res) {
    let pid = req.params['pageId'];
    let page = pages.find(function (page) {
      return page._id === pid;
    });
    res.json(page);
  }

  function updatePage(req, res) {
    let pid = req.params['pageId'];
    let page = req.body;
    let index = pages.findIndex(function (page) {
      return page._id === pid;
    });
    pages[index] = page;
    res.json(page);
  }

  function deletePage(req, res) {
    let pid = req.params['pageId'];
    let page = req.body;
    let index = pages.findIndex(function (page) {
      return page._id === pid;
    });
    pages.splice(index, 1);
    res.json({});
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

};
