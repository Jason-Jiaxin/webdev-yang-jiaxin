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

  let multer = require('multer'); // npm install multer --save
  let upload = multer({ dest: __dirname + '/../../src/assets/uploads' });

  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.put('/api/page/:pageId/widget', updateWidgetOrder);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.post ('/api/upload', upload.single('myFile'), uploadImage);

  function updateWidgetOrder(req, res) {
    let pid = req.params['pageId'];
    let indexChange = req.body;
    console.log('page id: ' + pid);
    console.log(indexChange);
    let startIdx = indexChange.start;
    let endIdx = indexChange.end;
    if (startIdx < endIdx) {
      let prevIdx = 0;
      let j = -1;
      for (let i = 0; i < widgets.length; i++) {
        if (widgets[i].pageId === pid){
          j++;
          if (j === startIdx) prevIdx = i;
          else if (j > startIdx && j < endIdx) {
            swap(prevIdx, i);
            prevIdx = i;
          } else if (j === endIdx){
            swap(prevIdx, i);
            break;
          }
        }
      }
    } else {
        let j = -1;
        let firstIdx = 0;
        let prevWidget;
        for (let i = 0; i < widgets.length; i++) {
          if (widgets[i].pageId === pid) {
            j++;
            if (j === endIdx) {
              firstIdx = i;
              prevWidget = widgets[i];
            }else if (j > endIdx && j < startIdx) {
              let temp = widgets[i];
              widgets[i] = prevWidget;
              prevWidget = temp;
            } else if (j === startIdx) {
              widgets[firstIdx] = widgets[i];
              widgets[i] = prevWidget;
              break;
            }
          }
        }
      }
    res.json(widgets);
  }

  function swap(i, j) {
    let temp = widgets[i];
    widgets[i] = widgets[j];
    widgets[j] = temp;
  }

  function uploadImage(req, res) {
    let widgetId = req.body.widgetId;
    let myFile =  req.file;

    console.log('dirname? ' + __dirname);
    console.log("widget server, upload image");
    console.log('widget id: ' + widgetId);
    console.log(myFile);
    let widget  = widgets.find(function (w) {
      return w._id === widgetId;
    });
    widget.url = 'assets/uploads/' + myFile.filename;
    console.log(widgets);
    res.json(widget);
  }


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
