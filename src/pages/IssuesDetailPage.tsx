import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { ErrorType, IssueDetailType } from '../types/issue';
import { empTyParamsInterceptor } from '../API/instance';
import { getSingleIssue } from '../API/github.issue';
import Loading from '../components/Loading';
import {
	MarkdownContainer,
	DetailContainer,
	UserInfoContainer,
	IssueInfoContainer,
	ImageIssueTitle,
	UserDateComments,
} from '../styles/IssuesDetail.style';

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
			<DetailContainer>
				<UserInfoContainer>
					<IssueInfoContainer>
						<ImageIssueTitle>
							<img src={`${singleIssue?.user.avatar_url}`} alt={`${singleIssue?.user.login} profile`} />
							<div>
								<h4>#{singleIssue?.number}</h4>
								<h2>title: {singleIssue?.title}</h2>
							</div>
						</ImageIssueTitle>
						<UserDateComments>
							<div>
								<h4>작성자: {singleIssue?.user.login}</h4>
								<h4>작성일: {issueDate}</h4>
							</div>
							<h5>Comments : {singleIssue?.comments}</h5>
						</UserDateComments>
					</IssueInfoContainer>
				</UserInfoContainer>
				<MarkdownContainer>
					<MDEditor.Markdown source={singleIssue?.body} />
				</MarkdownContainer>
			</DetailContainer>
		</>
	);
}

export default IssuesDetailPage;
