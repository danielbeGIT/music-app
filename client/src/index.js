import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { DataLayer } from './context/DataLayer'
import reducer, { initialState } from './context/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<DataLayer 
			initialState={initialState} 
			reducer={reducer}
		>
			<App />
		</DataLayer>
	</BrowserRouter>
)