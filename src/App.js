import React from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import GoogleLogin from 'react-google-login'

import LoginPage from './pages/login/login.page'
import VerificationPage from './pages/verification/verification.page'
import HomePage from './pages/home/home.page'

function App() {
	return (
		<div className='App'>
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path='/'>
							<LoginPage />
						</Route>
						<Route exact path='/verification'>
							<VerificationPage />
						</Route>
						<Route path='/home'>
							<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default App
