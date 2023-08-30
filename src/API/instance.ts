import axios from 'axios';
import { IssueListType } from '../types/issue';

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
		per_page: 5,
		page: 0,
	},
});

// state: issue가 초기값인지 아닌지 판별 후 interceptor 적용
export const activateInterceptor = (issues: IssueListType[]) => {
	const pageValue = issues.length;
	const interceptor = instance.interceptors.request.use((config) => {
		if (pageValue / config.params.per_page >= 1) {
			const newConfig = { ...config, params: { ...config.params, page: pageValue } };
			return newConfig;
		}
		return config;
	});
	return interceptor;
};

// interceptor를 적용하고 state를 최신화 후 eject 함
export const deactivateInterceptor = (interceptor: number | null) => {
	if (interceptor !== null) {
		instance.interceptors.request.eject(interceptor);
	}
};

export default instance;
