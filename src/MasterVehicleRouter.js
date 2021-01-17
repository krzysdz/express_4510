module.exports = ({
	router,
	MasterVehicleController,
	makeExpressCallback,
}) => {
	router.get(
		'/',
		makeExpressCallback(MasterVehicleController.getAllVehicles),
	);
	router.get(
		'/:id',
		makeExpressCallback(MasterVehicleController.getVehicleById),
	);
	return router;
};
