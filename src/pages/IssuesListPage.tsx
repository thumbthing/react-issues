import React, { useEffect, useState } from 'react';
// import IssueItem from '../components/IssueItem';
import { getIssueList } from '../API/github.issue';
import { IssueListType } from '../types/issue';
import IssueItem from '../components/IssueItem';
import Advertisements from '../components/Advertisements';

function IssuesListPage() {
	const [issues, setIssues] = useState<IssueListType[]>([]);

	useEffect(() => {
		const setIssueList = async () => {
			try {
				const response = await getIssueList();
				if (response?.status === 200) {
					setIssues(response?.data);
				} else {
					throw response?.status;
				}
			} catch (error) {
				if (error instanceof Error) {
					console.error('expected error occured : ', error);
				} else {
					console.error('unexpected error occured : ', error);
				}
			}
		};

		setIssueList();
	}, []);

	useEffect(() => {
		console.log(issues);
	}, [issues]);

	return (
		<div>
			<ul>
				{issues.map((item, index) => (
					<React.Fragment key={index}>
						{index === 0
							? null
							: index % 4 === 0 && (
									<li key={`advertise image ${index}`}>
										<Advertisements />
									</li>
							  )}
						<li key={item.number}>
							<IssueItem issue={item} />
						</li>
					</React.Fragment>
				))}
			</ul>
		</div>
	);
}

// 해야할일 정리

// header
// 두 페이지는 공통 헤더를 공유
// 헤더에는 Oragnization Name / Repository Name이 표시 되어야함

// 이슈 목록 가져오기
// open 상태인 이슈 중 코멘트가 많은 순 정렬
// 각 행에는
// 1. 이슈번호
// 2. 이슈제목
// 3. 작성자
// 4. 작성장
// 5. 코멘트수

// 1-4 이슈
// 5 광고 이미지
//    광고 이미지에는 https://www.wanted.co.kr/ 로 이동

// 화면 스크롤할시 이슈 목록 추가 로딩 (30개씩 받아진다)

export default IssuesListPage;
