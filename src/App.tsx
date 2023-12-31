import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssuesListPage from './pages/IssuesListPage';
import IssuesDetailPage from './pages/IssuesDetailPage';
import { ErrorType } from './types/issue';
import ErrorPage from './pages/ErrorPage';
import Header from './components/layout/Header';

function App() {
	const [isError, setIsError] = useState<ErrorType>({ name: 'Default Error Name', message: 'Default Error Message' });

	const handleError = (error: ErrorType | unknown) => {
		if (error instanceof Error) {
			setIsError(error);
		} else {
			const unOccuredError = new Error('unoccured error');
			setIsError(unOccuredError);
		}
	};

	const clearErrorAfterHandled = () => {
		setIsError({ name: '', message: '' });
	};

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<IssuesListPage handleError={handleError} />} />
				<Route path="/detail/*" element={<IssuesDetailPage handleError={handleError} />} />
				{isError && (
					<Route path="/error" element={<ErrorPage error={isError} setErrorClear={clearErrorAfterHandled} />} />
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
