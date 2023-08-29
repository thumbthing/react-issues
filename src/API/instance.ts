import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_REPO,
	headers: {
		Accept: 'application/vnd.github.vs+json',
		Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
	},
	params: {
		state: 'open',
		sort: 'comments',
		direction: 'desc',
		per_page: 10,
		page: 1,
	},
});

// TODO: interceptor 추가 필요

export default instance;
