import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const CLIENT_ID =
	'924987103181-cfumunr8le899c40g285lebdeu8km06c.apps.googleusercontent.com'

class GoogleLogin extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLogined: false,
			accessToken: '',
		}

		this.login = this.login.bind(this)
		this.handleLoginFailure = this.handleLoginFailure.bind(this)
		this.logout = this.logout.bind(this)
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this)
		console.log(CLIENT_ID)
		const CLIENT_ID =
			'924987103181-cfumunr8le899c40g285lebdeu8km06c.apps.googleusercontent.com'
		console.log(CLIENT_ID)
	}

	login(response) {
		if (response.accessToken) {
			this.setState((state) => ({
				isLogined: true,
				accessToken: response.accessToken,
			}))
		}
	}

	logout(response) {
		this.setState((state) => ({
			isLogined: false,
			accessToken: '',
		}))
	}

	handleLoginFailure(response) {
		alert('Failed to log in')
	}

	handleLogoutFailure(response) {
		alert('Failed to log out')
	}

	render() {
		return (
			<div>
				{this.state.isLogined ? (
					<GoogleLogout
						clientId='924987103181-cfumunr8le899c40g285lebdeu8km06c.apps.googleusercontent.com'
						buttonText='Logout'
						onLogoutSuccess={this.logout}
						onFailure={this.handleLogoutFailure}
					></GoogleLogout>
				) : (
					<GoogleLogin
						clientId='924987103181-cfumunr8le899c40g285lebdeu8km06c.apps.googleusercontent.com'
						buttonText='Login'
						onSuccess={this.login}
						onFailure={this.handleLoginFailure}
						cookiePolicy={'single_host_origin'}
						responseType='code,token'
					/>
				)}
				{this.state.accessToken ? (
					<h5>
						Your Access Token: <br />
						<br /> {this.state.accessToken}
					</h5>
				) : null}
			</div>
		)
	}
}

export default GoogleLogin
