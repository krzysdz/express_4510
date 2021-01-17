const express = require('express');
const makeExpressCallback = require('./express-callback');

const MasterVehicleController = require('../controllers/MasterVehicleController');
const MasterVehicleRoutes = require('./MasterVehicleRouter')({
	router: express.Router(),
	MasterVehicleController,
	makeExpressCallback,
});
const ServiceController = require('../controllers/ServiceController');
const ServiceRoutes = require('./ServiceRouter')({
	router: express.Router(),
	ServiceRequestController: ServiceController,
	makeExpressCallback,
});

module.exports = {
	MasterVehicleRoutes,
	ServiceRoutes
};
