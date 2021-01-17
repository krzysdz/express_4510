const app = require("./src/app");

const server = app.listen(() => {
	console.log(`Listening on http://localhost:${server.address().port}/`);
});
