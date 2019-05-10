module.exports = (app) => {
    const users = require('../controllers/userController.js');

    app.post('/login', users.login);
    app.post('/register', users.create);
    app.get('/users/:userId', users.findOne);

}