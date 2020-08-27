import React, { useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'react-bootstrap';


export default function FrontVideo() {

	const [video, setVideo] = useState([
		"https://www.youtube.com/watch?v=kzoD3ZEipZM",
		"https://www.youtube.com/watch?v=iphqRPaaeP8",
		"https://www.youtube.com/watch?v=yGY484EPe5U",
		"https://www.youtube.com/watch?v=LQ7TeO90J8c&list=RDCMUCzcRQ3vRNr6fJ1A9rqFn7QA&index=4"
	])



	const nextVideo = e => {
		e.preventDefault();
		setVideo(video => [...video.slice(1, 4), video[0]]);
	}


	return (
		<>
			<ReactPlayer
				url={video[0]}
				playing={false}
				volume={1}
				controls={true}
			/>
			<Button onClick={nextVideo}>Next Trailer</Button>{' '}
		</>
	)
}
