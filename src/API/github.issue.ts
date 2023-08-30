import instance from './instance';

export const getIssueList = async () => {
	return instance.get(`issues`);
};

export const getSingleIssue = async (issueNumberString: string) => {
	return instance.get(`issues/${issueNumberString}`);
};
