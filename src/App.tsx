import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssuesListPage from './pages/IssuesListPage';
import IssuesDetailPage from './pages/IssuesDetailPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IssuesListPage />} />
				<Route path="/detail" element={<IssuesDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
