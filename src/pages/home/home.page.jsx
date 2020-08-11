import React, { useState } from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

import checkImg from '../../assets/img/check.png'
import './home.scss'
function HomePage() {
	const [isValid, setIsValid] = useState(true)

	setTimeout(() => {
		setIsValid(false)
	}, 3000)

	return (
		<div className='home'>
			<div className='home-container'>
				{isValid ? (
					<div className='valid-container'>
						<img src={checkImg} alt='' />
						<span>Aadhar Verified Successfully</span>
					</div>
				) : (
					''
				)}
				<PDFViewer
					document={{
						url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
					}}
				/>
			</div>
		</div>
	)
}

export default HomePage
