import React from 'react';
import { IssueListType } from '../types/issue';

interface IssueItemProps {
	issue: IssueListType;
}

function IssueItem({ issue }: IssueItemProps) {
	return (
		<div>
			<div>
				<div>
					<span>이슈 번호: {issue.number}</span>
					<span>이슈 타이틀: {issue.title}</span>
				</div>
				<div>
					<span>작성자: {issue.user.login}</span>
					<span>작성일: {issue.create_at}</span>
				</div>
			</div>
			<div>코멘트: {issue.comments}</div>
		</div>
	);
}

export default IssueItem;
