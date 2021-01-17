const Router = require('../router');

// Middlewares
module.exports = function getRoutes(app) {
	app.use('/api/v1/services', Router.ServiceRoutes);
	app.use('/api/v1/master-vehicles', Router.MasterVehicleRoutes);
}
