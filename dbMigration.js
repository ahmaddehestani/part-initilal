const { Pool } = require('pg');
const { credentials, credentials2 } = require('./config');


const CreateDB = async () => {
	const pool = new Pool(credentials);
	await pool.query('CREATE DATABASE project');
	await pool.end();
};

const CreateTables = async () => {
	const pool = new Pool(credentials2);
	const query = (text, params, callback) => pool.query(text, params, callback);
	await query(
		`
	do $$
	begin
	 CREATE TABLE public.User
	   (
		UserID serial NOT NULL,
		name text NOT NULL,
		email text UNIQUE NOT NULL,
		family text NOT NULL,
		password text NOT NULL,
		PRIMARY KEY (UserID)
		);
		end
		$$
		`
	);

	

	await pool.end();
};

(async () => {
	await CreateDB();
	await CreateTables();
})();
