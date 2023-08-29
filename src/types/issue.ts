export interface IssueListType {
	number: number;
	title: string;
	comments: number;
	create_at: string;
	user: {
		login: string;
		avatar_url: string;
	};
}

export interface IssueDetailType {
	number: number;
	title: string;
	commets: number;
	create_at: string;
	body: string;
	user: {
		login: string;
		avatar_url: string;
	};
}
