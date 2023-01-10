import useAuth from '../hooks/useAuth'

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)
	
	return (
		<div>
			<h1>This user has logged in:</h1>
			<p>{code}</p>
		</div>
	)
}

export default MusicPage