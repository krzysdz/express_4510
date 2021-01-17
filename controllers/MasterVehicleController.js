function getAllVehicles(httpRequest) {
	return {
		body: "getAllVehicles",
		statusCode: 200
	};
}

function getVehicleById(httpRequest) {
	return {
		body: "getVehicleById",
		statusCode: 200
	};
}

module.exports = { getAllVehicles, getVehicleById };
