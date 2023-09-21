export const unwrapResult = <T, E>(result: { Ok: T } | { Err: E }): Promise<T> => {
	return new Promise((resolve: (value: T) => void, reject: (error: E) => void) => {
		if ('Ok' in result) {
			resolve(result.Ok);
		} else {
			reject(result.Err);
		}
	});
};
