import axios from 'axios';
import { IssueListType } from '../types/issue';

const DEFAULT_PARAMS = {
	state: 'open',
	sort: 'comments',
	direction: 'desc',
	per_page: 5,
	page: 0,
};

const NO_PARAMS = {};

const instance = axios.create({
	baseURL: process.env.REACT_APP_REPO,
	headers: {
		Accept: 'application/vnd.github.vs+json',
		Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
	},
	params: DEFAULT_PARAMS,
});

// state: issue가 초기값인지 아닌지 판별 후 interceptor 적용
export const activateInterceptor = (issues: IssueListType[]) => {
	const pageValue = issues.length;
	const interceptor = instance.interceptors.request.use((config) => {
		if (pageValue / config.params.per_page >= 1) {
			const newConfig = { ...config, params: { ...DEFAULT_PARAMS, page: pageValue } };
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

// Detail Page interceptor
export const empTyParamsInterceptor = (url: string) => {
	const isUrlDetail = url.includes('detail');
	const interceptor = instance.interceptors.request.use((config) => {
		if (isUrlDetail) {
			const newConfig = { ...config, params: NO_PARAMS };
			return newConfig;
		}
		return config;
	});
	return interceptor;
};

export default instance;
