// Styles
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/styles/App.scss'

// Pages
import Login from './pages/Login'
import MusicPage from './pages/MusicPage'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
	return (
		<>
			{
				code ? (
					<MusicPage code={code} />
				) : (
					<Login />
				)
			}
		</>
	)
}

export default App