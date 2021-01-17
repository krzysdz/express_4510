module.exports = ({
	router,
	ServiceRequestController,
	makeExpressCallback,
}) => {
	router.put(
		'/',
		makeExpressCallback(ServiceRequestController.changeRequestStatus),
	);
	router.get(
		'/:id',
		makeExpressCallback(ServiceRequestController.getRequestDetail),
	);
	return router;
};
