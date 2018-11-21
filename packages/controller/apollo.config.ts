module.exports = {
	client: {
		includes: [ __dirname + '/src/**/*.tsx' ],
		service: {
			name: 'hello-service',
			url: 'http://localhost:4000'
		}
	}
};

// apollo client:codegen ./src/**/*.tsx --localSchemaFile=schema.json  --target=typescript
// apollo client:codegen ./src/**/*.tsx -c=apollo.config.ts --target=typescript --outputFlat
