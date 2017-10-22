module.exports = function (app) {

  let widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/5dsGWM5XGdg' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  function createWidget(req, res) {
    let pid = req.params['pageId'];
    let widget = req.body;
    widget._id = getRandomInt(1000, 10000).toString();
    widget.pageId = pid;
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    let pid = req.params['pageId'];
    let result = widgets.filter(function (widget) {
      return widget.pageId === pid;
    });
    res.json(result);
  }

  function findWidgetById(req, res) {
    let wid = req.params['widgetId'];
    let widget = widgets.find(function (w) {
      return w._id === wid;
    });
    res.json(widget);
  }

  function updateWidget(req, res) {
    let wid = req.params['widgetId'];
    let widget = req.body;
    let index = widgets.findIndex(function (w) {
      return w._id === wid;
    });
    widgets[index] = widget;
    res.json(widget);
  }

  function deleteWidget(req, res) {
    let wid = req.params['widgetId'];
    let widget = req.body;
    let index = widgets.findIndex(function (w) {
      return w._id === wid;
    });
    widgets.splice(index, 1);
    res.json({});
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

};
