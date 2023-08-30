import React, { useEffect, useRef, useState } from 'react';
import { getIssueList } from '../API/github.issue';
import { ErrorType, IssueListType } from '../types/issue';
import IssueItem from '../components/IssueItem';
import Advertisements from '../components/Advertisements';
import { activateInterceptor, deactivateInterceptor } from '../API/instance';
import Loading from '../components/Loading';

interface IssuesListPageProps {
	handleError: (error: ErrorType | unknown) => void;
}

function IssuesListPage({ handleError }: IssuesListPageProps) {
	const [issues, setIssues] = useState<IssueListType[]>([]);
	const observerRef = useRef<IntersectionObserver>();
	const containerRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	// interceptor 작동 후 state에 추가
	const getIssuesAndAddToState = async () => {
		try {
			const interceptor = activateInterceptor(issues);
			setIsLoading(true);
			const response = await getIssueList();
			const newIssues = [...issues].concat(response?.data);
			setIssues(newIssues);
			deactivateInterceptor(interceptor);
		} catch (error) {
			handleError(error);
		} finally {
			setIsLoading(false);
		}
	};

	// 처음에 데이터 가져오는것
	useEffect(() => {
		getIssuesAndAddToState();
	}, []);

	// Intersection 설정
	const intersectionObserverSetting = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				getIssuesAndAddToState();
				io.unobserve(entry.target);
			}
		});
	};

	// IO 설정
	useEffect(() => {
		if (containerRef.current) {
			observerRef.current = new IntersectionObserver(intersectionObserverSetting, {
				root: null,
				threshold: 0.5,
			});
			observerRef.current.observe(containerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	// 마지막 요소를 선택하여 Intersection Observer 적용
	useEffect(() => {
		if (containerRef.current) {
			const lastElement = containerRef.current.querySelector('ul > li:last-child');
			if (lastElement) {
				setIsLoading(true);
				const lastElementObserver = new IntersectionObserver(intersectionObserverSetting, {
					root: null,
					threshold: 0.5,
				});
				lastElementObserver.observe(lastElement);
			}
			setIsLoading(false);
		}
	}, [issues]);

	return (
		<div ref={containerRef}>
			<ul>
				{isLoading && <Loading />}
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

export default IssuesListPage;
