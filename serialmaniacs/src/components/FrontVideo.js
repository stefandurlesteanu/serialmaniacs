import React, { useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import '../../src/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const StyledPlayer = styled.div`
	position: relative;
	float: left;
	display: inline-flex;
`

export default function FrontVideo() {

	const [video,] = useState([
		"https://www.youtube.com/watch?v=kzoD3ZEipZM",
		"https://www.youtube.com/watch?v=iphqRPaaeP8",
		"https://www.youtube.com/watch?v=yGY484EPe5U",
		"https://www.youtube.com/watch?v=ZIp2gZkAMT4"
	])

	const [ind, setInd] = useState(0)


	const nextVideo = e => {
		e.preventDefault();
		const lOS = video.length - 1;
		if (ind > lOS - 1) {
			setInd(ind - lOS)
		} else {
			setInd(ind + 1)
		}
	}

	const prevVideo = e => {
		e.preventDefault();
		const lOS = video.length - 1;
		console.log(ind)
		if (ind === 0) {
			console.log('reset')
			setInd(ind + lOS)
		} else {
			setInd(ind - 1)
		}
	}




	return (
		<StyledPlayer>
			<Button
				variant="outline-dark light"
				onClick={prevVideo}
				style={{ display: "inline-block" }}>
				<FontAwesomeIcon size={"2x"} icon={['fa', 'step-backward']} className="batmanButton" />
			</Button>{' '}
			<ReactPlayer
				url={video[ind]}
				playing={false}
				volume={1}
				controls={true}
				height={'85vh'}
			/>
			<Button
				variant="outline-dark light"
				onClick={nextVideo}
				style={{ display: "inline-block" }}>
				<FontAwesomeIcon size={"2x"} icon={['fa', 'step-forward']} className="batmanButton" />
			</Button>{' '}
		</StyledPlayer>
	)
}
