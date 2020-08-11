import React from 'react'
import './login.scss'
import generic from '../../assets/img/generic.jpg'
import GoogleLogin from 'react-google-login'
import LoginForm from '../../components/login/LoginForm'

function LoginPage() {
	return (
		<div className='login'>
			<div className='login-container'>
				<div className='login-header'>
					<p>Sign In</p>
					<div className='login-header-logo'>
						<img src={generic} alt='generic' />
						<span>Some Generic Company</span>
					</div>
				</div>
				<div className='login-body'>
					<div className='login-google'>
						<GoogleLogin />
					</div>
					<div className='divider'>
						<span>OR</span>
					</div>
					<div className='login-form'>
						<LoginForm />
					</div>
				</div>
				<div className='login-footer'>
					<div className='digio-container'>
						<img src={generic} alt='generic' />
						<span className='powered-by'>
							<span>Powered By</span>
							<a
								href='https://www.digio.in/#/index'
								target='_blank'
							>
								www.digio.in
							</a>
						</span>
					</div>
					<div className='steps'>
						<span className='first'>1</span>
						<span className='total'>/ 3 steps</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
