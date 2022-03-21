const userController = require('./controllers/user');
const dataParser = require('ahmad-dehestani-parser');
const schemaValidator = require('rest-schemavalidator');
const insertUserSchema = require('../../middleware/userValidator');



module.exports = {
  '/users': {
    GET: {
      function: userController.getUsers,
      middlewares: []
    },
    POST: {
      function: userController.createUser,
      middlewares: [dataParser,schemaValidator(insertUserSchema)]
    },
    PATCH:{
      function:userController.updateUser,
      middlewares: [dataParser]
    },
    DELETE:{
      function:userController.deleteUser,
      middlewares: [dataParser]
    },
  }
};
