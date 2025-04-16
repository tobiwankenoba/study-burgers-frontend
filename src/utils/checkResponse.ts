export const checkResponse = (response: Response) => {
	console.log(response);

	return response.ok
		? response.json()
		: response.json().then((err) => Promise.reject(err));
};
