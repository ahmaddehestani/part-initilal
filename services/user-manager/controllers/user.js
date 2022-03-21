const userModel = require('../models/user');
const c = require('../config');
const sendResponse =require("../../../modules/sendResponse")

 async function getUsers(req, res) {
  

  try {
		const result = await userModel.getUsers();
		sendResponse(res, 200, result);
	} catch (error) {
		sendResponse(res, 400, error);
	}
   
}

async function createUser(req, res) {
 
  try {
		const result = await userModel.createUser(req.data)
		sendResponse(res, 200, result);
	} catch (error) {
		sendResponse(res, 400, error);
	};
  
  
}
 async function updateUser(req ,res){
  try {
		const result = await userModel.updateUser(req.data);
		sendResponse(res, 200, result);
	} catch (error) {
		sendResponse(res, 400, error);
	};
}

async function deleteUser(req , res){
  
  try {
    
		const result = await userModel.deleteUser(req.data);
		sendResponse(res, 200, result);
	} catch (error) {
		sendResponse(res, 400, error);
	}
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
