module.exports = {
	client : {
		includes : [ __dirname + '/src/**' ],
		service  : {
			name : 'hello-service',
			url  : 'http://localhost:4000'
		}
	}
};
