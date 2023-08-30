export interface IssueListType {
	number: number;
	title: string;
	comments: number;
	created_at: string;
	user: {
		login: string;
	};
}

export interface IssueDetailType {
	number: number;
	title: string;
	commets: number;
	created_at: string;
	body: string;
	user: {
		login: string;
		avatar_url: string;
	};
}
