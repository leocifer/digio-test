const loginReducer = (
	state = {
		isLoggedIn: false,
		isAadharVerified: false,
		isOtpVerified: false,
	},
	action
) => {
	switch (action.type) {
		case 'LOGIN':
			return state
		case 'LOGOUT':
			return state
		default:
			return state
	}
}

export default loginReducer
