import axios from 'axios';
import { mockedData } from '../data/data';

const instance = axios.create({
	baseURL: 'http://localhost:3000/user',
});

/**
 * Gets user infos from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserInfos = async (id) => {

	// if (window.location.pathname === `/user/${id}`)
	// 	console.log('hi');

	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}
		const res = await instance.get(`/${id}`,
			config
		)
		return res.data;
	} catch (e) {
		console.log(e);
	}

};

/**
 * Gets user performance from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserPerformance = async (id) => {


	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}

		const res = await instance.get(`/${id}/performance`,
			config
		)
		// JSON.stringify(res.data, null, "\t")
		console.log(res.data);

		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user activity from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserActivity = async (id) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}

		const res = await instance.get(`/${id}/activity`,
			config
		)
		console.log(res.data);

		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user average sessions from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserAverageSessions = async (id) => {
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		}

		const res = await instance.get(`/${id}/average-sessions`,
			config
		)
		console.log(res.data);

		return res.data;
	} catch (e) {
		console.log(e);
	}
};
