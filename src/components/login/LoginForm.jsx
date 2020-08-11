import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './loginForm.scss'

export default function LoginForm() {
	const [email, setEmail] = useState('')
	const history = useHistory()

	const validateForm = () => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(String(email).toLowerCase())
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		history.push('/verification')
	}

	return (
		<div className='login-form-container'>
			<form onSubmit={handleSubmit}>
				<div className='login-form-wrapper'>
					<label htmlFor='email'>
						Proceed with your email address
					</label>
					<input
						autoFocus
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='policy-container'>
					<span>
						By continuing, I confirm to the Terms and Services and
						Privacy Policy of{' '}
						<a href='https://www.digio.in' target='_blank'>
							Digio.in
						</a>{' '}
					</span>
					<button disabled={!validateForm()} type='submit'>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}
