/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('click a button');
	const backendUrl = process.env.REACT_APP_BACKEND_URL;

	const handle_checkuser = async () => {
		const requestOptions = {
			method: 'GET',
			credentials: 'include'
		};
		const response = await fetch(backendUrl, requestOptions);
		const data = await response.json();
		setMessage(data.message);
	}

	const handle_login = async () => {
		const requestOptions = {
			method: 'GET',
			credentials: 'include'
		};
		const response = await fetch(`${backendUrl}/login`, requestOptions);
		const data = await response.json();
		setMessage(data.message);
	}

	const handle_logout = async () => {
		const requestOptions = {
			method: 'GET',
			credentials: 'include'
		};
		const response = await fetch(`${backendUrl}/logout`, requestOptions);
		const data = await response.json();
		setMessage(data.message);
	}

	return (
		<div className="App">
			<div><button onClick={handle_checkuser}>checkuser</button></div>
			<div><button onClick={handle_login}>login</button></div>
			<div><button onClick={handle_logout}>logout</button></div>
			<div>{message}</div>
		</div>
	);
}

export default App;