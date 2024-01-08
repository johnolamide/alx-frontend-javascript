import { signUpUser } from "./4-user-promise";
import { uploadPhoto } from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
	// Create an array of promises
	const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

	// Use Promise.allSettled() to handle all promises
	return Promise.allSettled(promises).then((results) => {
		// Map the results to the desired format
		return results.map((result) => ({
			status: result.status,
			value: result.status === "fulfilled" ? result.value : result.reason,
		}));
	});
}
