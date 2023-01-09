import './assets/styles/App.scss'
import Login from './components/Login'
import MusicPage from './components/MusicPage'

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