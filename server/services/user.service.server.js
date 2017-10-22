module.exports = function (app) {

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
    user._id = getRandomInt(1000, 10000).toString();
    users.push(user);
    res.json(user);
  }

  function findUsers(req, res) {
    let username = req.query['username'];
    let password = req.query['password'];
    let user;
    if (username) {
      if (password) {
        user = users.find(function (user) {
          return user.username === username && user.password === password;
        });
      } else {
        user = users.find(function (user) {
          return user.username === username;
        });
      }
      if (user) {
        res.json(user);
      } else {
        res.json(null);
      }
    } else {
      res.json(users);
    }
  }

  function findUserById(req, res) {
    let uid = req.params['userId'];
    let user = users.find(function (user) {
      return user._id === uid;
    });
    res.json(user);
  }

  function updateUser(req, res) {
    let uid = req.params['userId'];
    let user = req.body;
    let index = users.findIndex(function (user) {
      return user._id === uid;
    });
    users[index] = user;
    res.json(user);
  }

  function deleteUser(req, res) {
    let uid = req.params['userId'];
    let index = users.findIndex(function (user) {
      return user._id === uid;
    });
    users.splice(index, 1);
    res.json({});
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
