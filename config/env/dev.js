/**
 * 项目 环境 env
 */

//URL请求地址
const base_url = {
	API_BASE_URL: "https://api.l.whereask.com",
	GATEWAY_BASE_URL: 'http://gateway.2dfire-daily.com',
	IMAGE_BASE_URL: 'https://ifiletest.2dfire.com',
	ENV: '',
	MAX_CACHE_TIME: 10000, // 接口缓存时间  dev: 10秒  pre: 1分钟 publish 10分钟
};

module.exports = base_url;