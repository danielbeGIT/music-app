import React from 'react'
import useAuth from '../hooks/useAuth'

const MusicPage = ({ code }) => {
	const accessToken = useAuth(code)

	return (
		<div>{code}</div>
	)
}

export default MusicPage