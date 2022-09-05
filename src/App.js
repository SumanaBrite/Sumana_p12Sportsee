
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserPage from '../src/pages/UserPage/UserPage'
import ErrorPage from '../src/pages/ErrorPage/ErrorPage'
import Header from '../src/components/Header/Header'
import './App.css';
import React from 'react';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />

				<Routes>
					{/* Redirects to a user page by default*/}
					<Route path='/' element={<Navigate replace to="/user/12" />}>
					</Route>
					<Route path='/user/:id' element={<UserPage />} />
					<Route path='/*' element={<ErrorPage />} />

				</Routes>

			</BrowserRouter>
		</div>
	);
}

export default App;
