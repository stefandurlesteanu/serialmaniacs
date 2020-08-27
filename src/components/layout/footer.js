import React from 'react'
import brandLogo from '../layout/brandLogo.png'
import './footerCss.scss'
import '../../fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function footer() {
	return (
		<div className="footer">
			<div className="footer__inner">
				<div className="footer__logo-container">
					<img src={brandLogo} alt="logo" />
				</div>
				<div className="footer_third">
					<h1>Need Help?</h1>
					<a href="#/"> Terms &amp; Conditions</a>
					<a href="#/"> Privacy &amp; Policy</a>
				</div>
				<div className="footer_third">
					<h1>More</h1>
					<a href="#/"> IMDb</a>
					<a href="#/"> Movie Recommendation</a>
					<a href="#/"> YouTube</a>
					<a href="#/"> Cinema Recommendation</a>
				</div>
				<div className="footer_third">
					<h1>Follow Us</h1>
					<li><a href="#/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
					<li><a href="#/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
					<li><a href="#/"><FontAwesomeIcon icon={['fab', 'github-alt']} /></a></li>

					<span>
						&copy;{new Date().getFullYear()} TEAM Maniacs | All rights reserved | Terms of service | Privacy
					</span>
				</div>

			</div>


		</div >
	)
}

