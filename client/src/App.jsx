import "bootstrap/dist/css/bootstrap.min.css"
import './assets/styles/App.scss'
import Login from './components/Login'
import MusicPage from './pages/MusicPage'

// Search for "code" through the window path/url path
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