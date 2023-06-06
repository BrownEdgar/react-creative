import React from 'react'
import IconLinks from '../constants/IconLinks'
import facebook from './img-footer/fb.png'
import twitter from './img-footer/Twitter.png'
import instagram from './img-footer/insta.png'
import linkedin from './img-footer/Linkedin.png'

import './Footer.scss'

export default function Footer() {
	return (
		<footer>
			<div className='footer-img'>
				<div className='footer-img-icon'>
					<a href={IconLinks.fb}><img src={facebook} alt="fb-icon" /></a>
					<a href={IconLinks.insta}><img src={instagram} alt="insta-icon" /></a>
					<a href={IconLinks.tw}><img src={twitter} alt="tw-icon" /></a>
					<a href={IconLinks.linkedin}><img src={linkedin} alt="linkedin-icon" /></a>
				</div>
				<div>
					<p><img src={require('./img-footer/Copyright ©2020 All rights reserved.png')} alt="" /></p>
				</div>

			</div>
		</footer>
	)
}
