module.exports = function (app) {

  let userModel = require('../model/user/user.model.server');

  let users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi'}
  ];

  let passport = require('passport');
  let LocalStrategy = require('passport-local').Strategy;
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));

  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/user', createUser);
  app.get('/api/user', findUsers);
  // app.get('/api/user?username=username', findUserByUsername);
  // app.get('/api/user?username=username&password=password', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);



  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    console.log('passport local strategy');
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user.username === username && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function register(req, res) {
    let user = req.body;
    userModel
      .createUser(user)
      .then(function(user){
        req.login(user, function(err) {
          res.json(user);
        });
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

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
