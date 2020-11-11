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
					<a href="https://www.termsandconditionsgenerator.com/live.php?token=WLQdJqMDwNmo312mjqjqxuqCCahUE6wR"> Terms &amp; Conditions</a>
					<a href="https://www.privacypolicygenerator.info/live.php?token=zffuAlBlPSvNjOE3kYskUUurCQfG91Wj"> Privacy Policy</a>
				</div>
				<div className="footer_third">
					<h1>More</h1>
					<a href="https://www.imdb.com/"> IMDb</a>
					<a href="https://www.netflix.com/"> Netflix</a>
					<a href="https://www.youtube.com/"> YouTube</a>
				</div>
				<div className="footer_third">
					<h1>Follow Us</h1>
					<li><a href="https://www.facebook.com/ady.pogar"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
					<li><a href="https://www.linkedin.com/in/stefan-d-837bb1193/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
					<li><a href="https://github.com/stefandurlesteanu"><FontAwesomeIcon icon={['fab', 'github-alt']} /></a></li>
					<li><a href="mailto: florineless@gmail.com"><FontAwesomeIcon icon={['fa', 'envelope']} /></a></li>
					<span>
						&copy;{new Date().getFullYear()} TEAM Maniacs | All rights reserved
					</span>
				</div>

			</div>


		</div >
	)
}

