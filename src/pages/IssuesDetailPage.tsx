import React, { useEffect, useState } from 'react';
import { ErrorType, IssueDetailType } from '../types/issue';
import { empTyParamsInterceptor } from '../API/instance';
import { getSingleIssue } from '../API/github.issue';
import Loading from '../components/Loading';
import IssueDetialItemContainer from '../styles/IssuesDetail.style';

interface IssuesDetailPageProps {
	handleError: (error: ErrorType | unknown) => void;
}

function IssuesDetailPage({ handleError }: IssuesDetailPageProps) {
	const [singleIssue, setSingleIssue] = useState<IssueDetailType>();
	const [isLoading, setIsLoading] = useState(false);
	const URL = window.location.href;

	const formatDate = (dateString: string | undefined) => {
		if (dateString !== undefined) {
			const date = new Date(dateString);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();

			return `${year}년 ${month}월 ${day}일`;
		}
		return `date is unknown`;
	};

	const issueDate = formatDate(singleIssue?.created_at);

	// detail issue의 정보 가져오는 함수
	const getSingleDetailIssue = async () => {
		try {
			setIsLoading(true);
			empTyParamsInterceptor(URL);
			const URLParts = URL.split('/');
			const issueNumber = URLParts[URLParts.length - 1];
			const response = await getSingleIssue(issueNumber);
			if (response?.status === 200) {
				setSingleIssue(response?.data);
			}
			setIsLoading(false);
		} catch (error) {
			handleError(error);
		}
	};

	// 최초 렌더링시 데이터 가져오는 기능
	useEffect(() => {
		getSingleDetailIssue();
	}, []);

	return (
		<>
			{isLoading && <Loading />}
			<IssueDetialItemContainer>
				<div>
					<img src={`${singleIssue?.user.avatar_url}`} alt={`${singleIssue?.user.login} profile`} />
					<div>
						<span>
							#{singleIssue?.number} title: {singleIssue?.title}
						</span>
						<h6>
							작성자: {singleIssue?.user.login}, 작성일: {issueDate}
						</h6>
					</div>
					<h5>{singleIssue?.comments}</h5>
				</div>
				<div>
					<h5>{singleIssue?.body}</h5>
				</div>
			</IssueDetialItemContainer>
		</>
	);
}

export default IssuesDetailPage;
