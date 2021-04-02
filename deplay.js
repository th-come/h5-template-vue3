const uploadPath = require('./package.json').name;

module.exports = {
	configs: {
		user: 'ftpcoco',
		password: 'killers1Y',
		host: '118.190.25.113',
		port: 257,
		localRoot: '/dist',
		remoteRoot: `/mobile.51wnl.com/${uploadPath}`
	}
}