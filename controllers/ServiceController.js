function changeRequestStatus(httpRequest) {
	return {
		body: "changeRequestStatus",
		statusCode: 200
	};
}

function getRequestDetail(httpRequest) {
	return {
		body: "getRequestDetail",
		statusCode: 200
	};
}

module.exports = { changeRequestStatus, getRequestDetail };
