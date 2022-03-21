const ajvInstance = require('rest-ajv-custom');
const insertUserSchema = {
	type: 'object',
	properties: {
		name: { type: 'string' },
		email: { type: 'string'},
		family:{type:'string'},
		password: {},
	
	},
	required: [ 'name', 'email', 'family', 'password' ],
	additionalProperties: false
};

module.exports = ajvInstance.compile(insertUserSchema);
