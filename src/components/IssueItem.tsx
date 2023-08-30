import React from 'react';
import { IssueListType } from '../types/issue';
import StyledIssueItem from '../styles/IssueItem.style';

interface IssueItemProps {
	issue: IssueListType;
}

function IssueItem({ issue }: IssueItemProps) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		return `${year}년 ${month}월 ${day}일`;
	};

	const issueDate = formatDate(issue.created_at);

	return (
		<StyledIssueItem>
			<div>
				<div>
					<span>이슈 번호: {issue.number}</span>
					<span>이슈 타이틀: {issue.title}</span>
				</div>
				<div>
					<span>작성자: {issue.user?.login}</span>
					<span>작성일: {issueDate}</span>
				</div>
			</div>
			<div>코멘트: {issue.comments}</div>
		</StyledIssueItem>
	);
}

export default IssueItem;
