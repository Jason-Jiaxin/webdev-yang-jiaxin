module.exports = function (app) {

  let userModel = require('../model/user/user.model.server');

  let users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi'}
  ];

  app.post('/api/user', createUser);
  app.get('/api/user', findUsers);
  // app.get('/api/user?username=username', findUserByUsername);
  // app.get('/api/user?username=username&password=password', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  function createUser(req, res) {
    let user = req.body;
    userModel.createUser(user).then(function (result) {
      res.json(result);
    });
  }

  function findUsers(req, res) {
    let username = req.query['username'];
    let password = req.query['password'];
    let user;
    if (username) {
      if (password) {
        userModel.findUserByCredentials(username, password).then(function (result) {
          user = result;
          if (user) {
            res.json(user);
          } else {
            res.json(null);
          }
        });
      } else {
        userModel.findUserByUsername(username).then(function (result) {
          user = result;
          if (user) {
            res.json(user);
          } else {
            res.json(null);
          }
        });
      }
    } else {
      userModel.findAllUsers().then(function (result) {
        res.json(result);
      });
    }
  }

  function findUserById(req, res) {
    let uid = req.params['userId'];
    userModel.findUserById(uid).then(function (user) {
      res.json(user);
    });

  }

  function updateUser(req, res) {
    let uid = req.params['userId'];
    let user = req.body;
    userModel.updateUser(uid, user).then(function (result) {
      userModel.findUserById(uid).then(function (result) {
        res.json(result);
      })
    });
  }

  function deleteUser(req, res) {
    let uid = req.params['userId'];
    userModel.deleteUser(uid).then(function (result) {
      res.json(result);
    });
  }

  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
};
