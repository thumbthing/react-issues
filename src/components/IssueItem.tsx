import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IssueListType } from '../types/issue';
import StyledIssueItem from '../styles/IssueItem.style';

interface IssueItemProps {
	issue: IssueListType;
}

function IssueItem({ issue }: IssueItemProps) {
	const navigate = useNavigate();
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		return `${year}년 ${month}월 ${day}일`;
	};

	const issueDate = formatDate(issue.created_at);

	const navigateToDetailIssue = (issueNumber: number) => {
		navigate(`detail/${issueNumber}`);
	};

	return (
		<StyledIssueItem onClick={() => navigateToDetailIssue(issue.number)}>
			<div>
				<div>
					<span>
						code: {issue.number} title: {issue.title}
					</span>
				</div>
				<div>
					<span>
						작성자: {issue.user?.login} 작성일: {issueDate}
					</span>
				</div>
			</div>
			<div>코멘트: {issue.comments}</div>
		</StyledIssueItem>
	);
}

export default IssueItem;
