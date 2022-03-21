const { password } = require("pg/lib/defaults");
const excuteQuery = require("../../../dbConnector/index")



module.exports.createUser = async (req) => {
  
  try {
		let command, params;
		
		
		command = `INSERT INTO public.User(name,email,family,password) VALUES($1,$2,$3,$4)`;
		params = [ req.name, req.email, req.family, req.password ];
 await excuteQuery(command, params);
 

		return params;
	} catch (error) {
		throw error.message;
	}
}

module.exports.getUsers= async(req,res)=>{

  let command, params;
	
		command = `SELECT * FROM public.User`;
		params = null;
	
	try {
		const { rows } = await excuteQuery(command, params);
    
		return rows;
	} catch (error) {
		throw error.message;
	}
}

module.exports.updateUser=async (data)=>{
  
  let command, params;
	command = `UPDATE public.User SET name=$1 WHERE email=$2`;
	params = [data.name, data.email ];
  
	try {
    await excuteQuery(command, params);
		return true;
	} catch (error) {
    throw error.message;
  }
	
}
module.exports.deleteUser= async (data)=>{
  try {
  
  let command, params;
	command = `DELETE FROM public.User WHERE email = $1`;
	params = [ data.email ];
	
		await excuteQuery(command, params);
		return true;
	} catch (error) {
		throw error.message;
	}
}



