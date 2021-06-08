import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='jane'
			userSecret='jane123'
			projectID='b57763c0-667d-4048-b20e-a420072a3600'
		/>
	);
}
