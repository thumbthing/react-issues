import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IssueListType } from '../types/issue';
import {
	IssueCodeTitleContainer,
	StyledIssueItem,
	IssueComments,
	IssueTitleAndUser,
	IssueNumberAndDate,
} from '../styles/IssueItem.style';

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
				<IssueCodeTitleContainer>
					<IssueNumberAndDate>#{issue.number}</IssueNumberAndDate>
					<IssueTitleAndUser>{issue.title}</IssueTitleAndUser>
				</IssueCodeTitleContainer>
				<div>
					<div>
						<IssueTitleAndUser>작성자: {issue.user?.login}</IssueTitleAndUser>
						<IssueNumberAndDate>작성일: {issueDate}</IssueNumberAndDate>
					</div>
					<IssueComments>comments: {issue.comments}</IssueComments>
				</div>
			</div>
		</StyledIssueItem>
	);
}

export default IssueItem;
