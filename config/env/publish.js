/**
 * 生产 环境 env
 */

//URL请求地址
const base_url = {
	API_BASE_URL: 'https://meal.2dfire.com',
	GATEWAY_BASE_URL: 'https://gateway.2dfire.com',
	IMAGE_BASE_URL: 'https://ifile.2dfire.com',
	ENV: 'publish',
	MAX_CACHE_TIME: 600000
};

module.exports = base_url;