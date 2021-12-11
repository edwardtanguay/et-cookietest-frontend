import { useEffect } from 'react';
import './App.scss';

function App() {

	const backendUrl = process.env.BACKEND_URL;
	useEffect(() => {
		(async () => {
			const response = await fetch(backendUrl);
			const data = await response.json();
			console.log(data);
		})();
	}, []);

	const handle_login = async () => {
		const response = await fetch(`${backendUrl}/login`);
		const data = await response.json();
		console.log(data);
	}

	const handle_stayloggedin = async () => {
		const response = await fetch(`${backendUrl}/stayloggedin`);
		const data = await response.json();
		console.log(data);
	}

	return (
		<div className="App">
			<button onClick={handle_login}>login</button>
			<button onClick={handle_stayloggedin}>stay logged in</button>
		</div>
	);
}

export default App;