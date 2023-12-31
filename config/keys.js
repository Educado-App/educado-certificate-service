const dotenv = require('dotenv');
const process = require('process');

// Load environment variables based on NODE_ENV
if (process.env.NODE_ENV === 'production') {
	dotenv.config({ path: './config/.env.prod' });
} else {
	dotenv.config({ path: './config/.env' });
}

// Access the environment variables
const keys = {
	mongoURI: process.env.MONGO_URI,
	BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:8888',
};

module.exports = keys;