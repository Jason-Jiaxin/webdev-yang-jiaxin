module.exports = function (app) {

  let userModel = require('../model/user/user.model.server');
  let bcrypt = require("bcrypt-nodejs");

  let users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi'}
  ];

  let passport = require('passport');
  let LocalStrategy = require('passport-local').Strategy;
  let FacebookStrategy = require('passport-facebook').Strategy;
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));

  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  // app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email'}));
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/user', createUser);
  app.get('/api/user', findUsers);
  // app.get('/api/user?username=username', findUserByUsername);
  // app.get('/api/user?username=username&password=password', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/profile',
      failureRedirect: '/login' }));

  let facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID? process.env.FACEBOOK_CLIENT_ID : 'test',
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET? process.env.FACEBOOK_CLIENT_SECRET : 'test',
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL? process.env.FACEBOOK_CALLBACK_URL : 'test',
  };
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function facebookStrategy(accessToken, refreshToken, profile, done) {
    console.log(profile);
    userModel.findUserByFacebookId(profile.id).then(function (user) {
      if (user) {
        console.log(user);
        console.log(accessToken);
        return done(null, user);
      } else {
        let names = profile.displayName.split(" ");
        let newUser = {
          lastName:  names[1],
          firstName: names[0],
          email:     profile.emails? profile.emails[0].value : "",
          facebook: {
          id:    profile.id,
          token: accessToken,
        }};
        userModel.createUser(newUser).then(function (result) {
          return done(null, result);
        })
      }
    })
  }

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
      .findUserByUsername(username)
      .then(
        function(user) {
          console.log(user);
          console.log('input pass: ' + password);
          console.log('compare: ' + bcrypt.compareSync(password, user.password));
          if(user && user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            console.log('passport else no user');
            return done(null, false);
          }
        },
        function(err) {
          console.log('passport user error');
          if (err) { return done(err); }
        }
      );
  }

  function register(req, res) {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password);
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
