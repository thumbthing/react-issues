import instance from './instance';

export const getIssueList = async () => {
	return instance.get(`issues`);
};

export const getSingleIssue = async (issueNumber: number) => {
	return instance.get(`issues/${issueNumber}`);
};
