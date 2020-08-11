import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import aadharImg from '../../assets/img/aadhar.png'
import './verification.scss'

function VerificationPage() {
	const [aadhar, setAadhar] = useState('')
	const [isAadharValid, setIsAadharValid] = useState(false)
	const [isAgree, setIsAgree] = useState(false)
	const [otp, setOtp] = useState('')
	const [isOtpValid, setIsOtpValid] = useState(false)
	const history = useHistory()

	const validateAadhar = () => {
		const regex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/
		return regex.test(String(aadhar).toLowerCase())
	}

	const handleAadharSubmit = (event) => {
		event.preventDefault()
		setIsAadharValid(true)
	}

	const handleIsAgree = () => setIsAgree(!isAgree)

	const validateOtp = () => {
		const regex = /^[0-9]{6}$/
		return regex.test(String(otp).toLowerCase())
	}

	const handleOtpSubmit = (event) => {
		event.preventDefault()
		setIsOtpValid(true)
		history.push('/home')
	}

	return (
		<div className='verification'>
			<div className='verification-container'>
				<div className='verification-header'>Register Aadhar</div>
				<div className='verification-body'>
					<div className='validate-aadhar'>
						<form onSubmit={handleAadharSubmit}>
							<div className='aadhar-img'>
								<img src={aadharImg} alt='aadhar' />
							</div>
							<div className='aadhar-form'>
								<input
									autoFocus
									type='text'
									value={aadhar}
									onChange={(e) => setAadhar(e.target.value)}
								/>
								<button
									disabled={!validateAadhar() || !isAgree}
									type='submit'
								>
									Verify
								</button>
							</div>
						</form>
						<div className='agree-check'>
							<label>
								<input
									name='isAgree'
									type='checkbox'
									checked={isAgree}
									onChange={handleIsAgree}
								/>
								I Agree to eSign this <u>KYC document</u> to get
								started
							</label>
						</div>
					</div>
					{isAadharValid ? (
						<div className='validate-otp'>
							<form onSubmit={handleOtpSubmit}>
								<div>
									<input
										type='text'
										value={otp}
										onChange={(e) => setOtp(e.target.value)}
									/>
								</div>
								<button disabled={!validateOtp()} type='submit'>
									Submit
								</button>
							</form>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}

export default VerificationPage
